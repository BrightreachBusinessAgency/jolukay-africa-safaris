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

    public function show(Package $package)
    {
        abort_unless($package->published, 404);

        return response()->json($package);
    }
}
