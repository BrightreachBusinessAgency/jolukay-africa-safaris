<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePackageRequest;
use App\Http\Requests\UpdatePackageRequest;
use App\Models\Package;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Throwable;

class PackageController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(
            Package::latest()->get()
        );
    }

    public function store(StorePackageRequest $request): JsonResponse
    {
        DB::beginTransaction();

        try {

            $data = $request->validated();

            $data['published'] = $request->boolean('published');

            if ($request->hasFile('featured_image')) {
                $data['featured_image'] = $request
                    ->file('featured_image')
                    ->store('packages', 'public');
            }

            $data['slug'] = $this->buildSlug(
                $data['slug'] ?? Str::slug($data['title'])
            );

            $package = Package::create($data);

            DB::commit();

            return response()->json($package, 201);

        } catch (Throwable $e) {

            DB::rollBack();

            if (!empty($data['featured_image'] ?? null)) {
                Storage::disk('public')->delete($data['featured_image']);
            }

            return response()->json([
                'message' => 'Unable to create package.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function show(Package $package): JsonResponse
    {
        return response()->json($package);
    }

    public function update(UpdatePackageRequest $request, Package $package): JsonResponse
    {
        DB::beginTransaction();

        try {

            $data = $request->validated();

            $data['published'] = $request->boolean('published');

            if ($request->hasFile('featured_image')) {

                $newImage = $request
                    ->file('featured_image')
                    ->store('packages', 'public');

                if ($package->featured_image) {
                    Storage::disk('public')->delete($package->featured_image);
                }

                $data['featured_image'] = $newImage;
            }

            $data['slug'] = $this->buildSlug(
                $data['slug'] ?? $package->slug,
                $package->id
            );

            $package->update($data);

            DB::commit();

            return response()->json($package->fresh());

        } catch (Throwable $e) {

            DB::rollBack();

            return response()->json([
                'message' => 'Unable to update package.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function destroy(Package $package): JsonResponse
    {
        if ($package->featured_image) {
            Storage::disk('public')->delete($package->featured_image);
        }

        $package->delete();

        return response()->json([
            'message' => 'Package deleted successfully.'
        ]);
    }

    protected function buildSlug(string $slug, ?int $ignoreId = null): string
    {
        $slug = Str::slug($slug);

        $original = $slug;
        $count = 1;

        while (
            Package::where('slug', $slug)
                ->when(
                    $ignoreId,
                    fn ($query) => $query->where('id', '!=', $ignoreId)
                )
                ->exists()
        ) {
            $slug = "{$original}-{$count}";
            $count++;
        }

        return $slug;
    }
}