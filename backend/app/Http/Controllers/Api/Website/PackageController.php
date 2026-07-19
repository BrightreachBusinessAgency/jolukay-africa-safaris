<?php

namespace App\Http\Controllers\Api\Website;

use App\Http\Controllers\Controller;
use App\Models\Package;

class PackageController extends Controller
{
    public function index()
    {
        $packages = Package::where('published', true)
            ->orderByDesc('created_at')
            ->get();

        return response()->json($packages);
    }

   public function show(string $slug)
{
    $package = Package::where('slug', $slug)
        ->where('published', true)
        ->firstOrFail();

    return response()->json($package);
}
}
