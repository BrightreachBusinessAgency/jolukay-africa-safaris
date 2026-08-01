<?php

namespace App\Http\Controllers\Api\Website;

use App\Http\Controllers\Controller;
use App\Models\GalleryImage;
use Illuminate\Http\JsonResponse;

class GalleryController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(
            GalleryImage::latest()->get()
        );
    }
}