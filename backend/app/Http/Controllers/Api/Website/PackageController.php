<?php

namespace App\Http\Controllers\Api\Website;

use App\Http\Controllers\Controller;
use App\Models\Package;

class PackageController extends Controller
{
    public function index()
    {
        $packages = Package::where('published', true)
            ->latest()
            ->get()
            ->map(function ($package) {

                if ($package->featured_image && !str_starts_with($package->featured_image, 'http')) {
                    $package->featured_image = asset('storage/packages/' . basename($package->featured_image));
                }

                return $package;
            });

        return response()->json($packages);
    }

    public function show(string $slug)
    {
        $package = Package::where('slug', $slug)
            ->where('published', true)
            ->firstOrFail();

        if ($package->featured_image && !str_starts_with($package->featured_image, 'http')) {
            $package->featured_image = asset('storage/packages/' . basename($package->featured_image));
        }

        return response()->json($package);
    }
}