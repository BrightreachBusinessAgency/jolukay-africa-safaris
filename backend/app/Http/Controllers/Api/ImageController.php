<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;

class ImageController extends Controller
{
    public function show(string $folder, string $filename)
    {
        // Allow only folders we expect
        if (!in_array($folder, ['gallery', 'packages'])) {
            abort(404);
        }

        $path = storage_path("app/public/{$folder}/{$filename}");

        if (!file_exists($path)) {
            abort(404);
        }

        return Response::file($path);
    }
}