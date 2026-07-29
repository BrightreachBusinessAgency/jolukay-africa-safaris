<?php

namespace App\Http\Controllers\Api\Website;

use App\Http\Controllers\Controller;
use App\Models\GalleryImage;
use Illuminate\Http\JsonResponse;

class GalleryController extends Controller
{
    public function index(): JsonResponse
    {
        $gallery = GalleryImage::latest()->get()->map(function ($image) {

            if ($image->image && !str_starts_with($image->image, 'http')) {
                $image->image = asset('storage/gallery/' . basename($image->image));
            }

            return $image;
        });

        return response()->json($gallery);
    }
}