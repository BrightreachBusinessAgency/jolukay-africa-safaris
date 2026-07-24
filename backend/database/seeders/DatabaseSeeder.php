<?php

namespace Database\Seeders;

use App\Models\Package;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        /*
        |--------------------------------------------------------------------------
        | Default Administrator
        |--------------------------------------------------------------------------
        | Creates the administrator if it doesn't exist or updates it if it does.
        | Credentials are read from the .env file.
        |--------------------------------------------------------------------------
        */
        User::updateOrCreate(
            [
                'email' => env('ADMIN_EMAIL', 'admin@jolukayafricasafaris.com'),
            ],
            [
                'name' => env('ADMIN_NAME', 'Administrator'),
                'password' => Hash::make(
                    env('ADMIN_PASSWORD', 'Admin@123')
                ),
                'role' => 'admin',
                'status' => 'active',
            ]
        );

        /*
        |--------------------------------------------------------------------------
        | Default Safari Packages
        |--------------------------------------------------------------------------
        */
        if (Package::count() === 0) {

            Package::create([
                'title' => '5 Days Maasai Mara Safari',
                'slug' => '5-days-maasai-mara-safari',
                'location' => 'Maasai Mara, Kenya',
                'safari_type' => 'Jeep Safari',
                'duration' => '5 Days / 4 Nights',
                'price' => 1599.00,
                'summary' => 'A classic Maasai Mara safari with morning and evening game drives to see lions, elephants, giraffes and the Big Five.',
                'itinerary' => 'Day 1: Arrival and lodge check-in. Day 2: Full-day game drive. Day 3: Morning game drive and cultural visit. Day 4: Bush picnic and evening game drive. Day 5: Departure.',
                'inclusions' => 'Accommodation, meals, park fees, airport transfers, guided safari drives.',
                'exclusions' => 'International flights, travel insurance, gratuities, visa fees and personal expenses.',
                'published' => true,
            ]);

            Package::create([
                'title' => '3 Days Amboseli Adventure',
                'slug' => '3-days-amboseli-adventure',
                'location' => 'Amboseli National Park, Kenya',
                'safari_type' => 'Land Cruiser Safari',
                'duration' => '3 Days / 2 Nights',
                'price' => 1199.00,
                'summary' => 'See herds of elephants with Mount Kilimanjaro as a backdrop while staying at a safari lodge in Amboseli.',
                'itinerary' => 'Day 1: Arrive and settle in. Day 2: Morning and afternoon game drives. Day 3: Final game drive and departure.',
                'inclusions' => 'Lodge accommodation, transport, meals, guided drives and park fees.',
                'exclusions' => 'International flights, visas, insurance and gratuities.',
                'published' => true,
            ]);
        }
    }
}