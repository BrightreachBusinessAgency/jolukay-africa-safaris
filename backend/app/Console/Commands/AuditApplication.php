<?php

namespace App\Console\Commands;

use App\Models\Booking;
use App\Models\Customer;
use App\Models\GalleryImage;
use App\Models\Package;
use App\Models\SocialSetting;
use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Throwable;

class AuditApplication extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'audit:application {--base-url=http://localhost : Base URL to run the HTTP checks against}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run a full functional audit of the Jolukay Africa Safaris application (seeding, API endpoints, auth, database and storage).';

    /**
     * Collected results for the summary table.
     *
     * @var array<int, array<string, mixed>>
     */
    protected array $results = [];

    public function handle(): int
    {
        $baseUrl = rtrim((string) $this->option('base-url'), '/');

        $this->info('==============================================');
        $this->info(' Jolukay Africa Safaris - Application Audit');
        $this->info('==============================================');
        $this->newLine();

        $this->seedDatabase();
        $this->newLine();

        $this->testPublicEndpoints($baseUrl);
        $this->newLine();

        $token = $this->testAuthentication($baseUrl);
        $this->newLine();

        $this->verifyDatabaseRecords();
        $this->newLine();

        $this->testFileStorage();
        $this->newLine();

        $this->displaySummary();

        return self::SUCCESS;
    }

    /**
     * Step 1: Seed test data using the DatabaseSeeder.
     */
    protected function seedDatabase(): void
    {
        $this->line('<fg=yellow>1) Seeding test data...</>');

        try {
            Artisan::call('db:seed', [
                '--class' => DatabaseSeeder::class,
                '--force' => true,
            ]);

            $this->info('   ✓ DatabaseSeeder executed successfully.');
        } catch (Throwable $e) {
            $this->error('   ✗ Seeding failed: '.$e->getMessage());
        }
    }

    /**
     * Step 2: Test all public API endpoints.
     */
    protected function testPublicEndpoints(string $baseUrl): void
    {
        $this->line('<fg=yellow>2) Testing public API endpoints...</>');

        $this->hit('GET /api/test', 'GET', $baseUrl.'/api/test');
        $this->hit('GET /api/packages', 'GET', $baseUrl.'/api/packages');

        $slug = Package::query()->value('slug') ?? '5-days-maasai-mara-safari';
        $this->hit('GET /api/packages/{slug}', 'GET', $baseUrl.'/api/packages/'.$slug);

        $this->hit('GET /api/gallery', 'GET', $baseUrl.'/api/gallery');
        $this->hit('GET /api/social-settings', 'GET', $baseUrl.'/api/social-settings');
    }

    /**
     * Step 3: Test authentication flow (login + fetching authenticated user).
     */
    protected function testAuthentication(string $baseUrl): ?string
    {
        $this->line('<fg=yellow>3) Testing authentication...</>');

        $email = 'admin@jolukayafricasafaris.com';
        $password = 'Admin@12345';

        $token = null;
        $label = 'POST /api/admin/login';
        $start = microtime(true);

        try {
            $response = Http::acceptJson()->post($baseUrl.'/api/admin/login', [
                'email' => $email,
                'password' => $password,
            ]);

            $duration = round((microtime(true) - $start) * 1000, 2);
            $token = data_get($response->json(), 'token');

            $this->recordResult(
                $label,
                $response->status(),
                $duration,
                $response->successful() && $token,
                $token ? 'Token issued' : 'No token returned'
            );
        } catch (Throwable $e) {
            $duration = round((microtime(true) - $start) * 1000, 2);
            $this->recordResult($label, 0, $duration, false, $e->getMessage());
        }

        if ($token) {
            $this->hit('GET /api/admin/user', 'GET', $baseUrl.'/api/admin/user', [
                'Authorization' => 'Bearer '.$token,
            ]);
        } else {
            $this->recordResult('GET /api/admin/user', 0, 0, false, 'Skipped - no auth token available');
        }

        return $token;
    }

    /**
     * Step 4: Verify counts of key database records.
     */
    protected function verifyDatabaseRecords(): void
    {
        $this->line('<fg=yellow>4) Verifying database records...</>');

        $counts = [
            'Users' => User::count(),
            'Packages' => Package::count(),
            'Bookings' => Booking::count(),
            'Customers' => Customer::count(),
            'Gallery Images' => GalleryImage::count(),
            'Social Settings' => SocialSetting::count(),
        ];

        $this->table(['Model', 'Total Records'], collect($counts)->map(function ($total, $model) {
            return [$model, $total];
        })->values()->all());

        if ($counts['Packages'] !== 2) {
            $this->warn("   ⚠ Expected 2 packages after seeding, found {$counts['Packages']}.");
        }
    }

    /**
     * Step 5: Test that file storage is accessible.
     */
    protected function testFileStorage(): void
    {
        $this->line('<fg=yellow>5) Testing file storage...</>');

        try {
            $disk = Storage::disk('public');
            $testPath = 'audit/audit-'.now()->timestamp.'.txt';

            $disk->put($testPath, 'Jolukay audit test file');
            $exists = $disk->exists($testPath);
            $disk->delete($testPath);

            $this->info($exists
                ? '   ✓ Public storage disk is writable and accessible.'
                : '   ✗ Could not verify public storage disk write access.');
        } catch (Throwable $e) {
            $this->error('   ✗ Public storage disk check failed: '.$e->getMessage());
        }

        $logsPath = storage_path('logs');

        if (File::isDirectory($logsPath)) {
            $this->info('   ✓ storage/logs directory exists ('.$logsPath.').');
        } else {
            $this->error('   ✗ storage/logs directory not found at '.$logsPath);
        }

        $storageLink = public_path('storage');

        if (File::exists($storageLink)) {
            $this->info('   ✓ Storage symlink found at public/storage.');
        } else {
            $this->warn('   ⚠ Storage symlink not found at public/storage.');
        }
    }

    /**
     * Perform an HTTP GET/POST check and record the result.
     */
    protected function hit(string $label, string $method, string $url, array $headers = []): void
    {
        $start = microtime(true);

        try {
            $request = Http::acceptJson()->withHeaders($headers);
            $response = strtoupper($method) === 'POST'
                ? $request->post($url)
                : $request->get($url);

            $duration = round((microtime(true) - $start) * 1000, 2);

            $this->recordResult(
                $label,
                $response->status(),
                $duration,
                $response->successful(),
                $response->successful() ? 'OK' : 'Unexpected status'
            );
        } catch (Throwable $e) {
            $duration = round((microtime(true) - $start) * 1000, 2);
            $this->recordResult($label, 0, $duration, false, $e->getMessage());
        }
    }

    /**
     * Record a single test result.
     */
    protected function recordResult(string $endpoint, int $status, float $durationMs, bool $success, string $notes = ''): void
    {
        $this->results[] = [
            'endpoint' => $endpoint,
            'status' => $status ?: 'N/A',
            'duration' => $durationMs.' ms',
            'result' => $success ? '✓ Success' : '✗ Failure',
            'notes' => $notes,
        ];
    }

    /**
     * Step 6: Display the final results table.
     */
    protected function displaySummary(): void
    {
        $this->info('==============================================');
        $this->info(' Audit Summary');
        $this->info('==============================================');

        $rows = collect($this->results)->map(function ($result) {
            return [
                $result['endpoint'],
                $result['status'],
                $result['duration'],
                $result['result'],
                $result['notes'],
            ];
        })->all();

        $this->table(
            ['Endpoint', 'HTTP Status', 'Response Time', 'Result', 'Notes'],
            $rows
        );

        $failures = collect($this->results)->filter(fn ($r) => str_contains($r['result'], 'Failure'))->count();

        if ($failures === 0) {
            $this->info('All checks passed. Application is fully functional. ✅');
        } else {
            $this->error("{$failures} check(s) failed. Review the table above for details. ❌");
        }
    }
}
