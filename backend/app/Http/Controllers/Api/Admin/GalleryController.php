<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\GalleryImage;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    /**
     * Display all gallery images.
     */
    public function index(): JsonResponse
    {
        return response()->json(
            GalleryImage::latest()->get()
        );
    }

    /**
     * Upload one or more gallery images.
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'images' => 'required|array|min:1',
            'images.*' => 'image|max:5120',
        ]);

        $uploaded = [];

        foreach ($request->file('images') as $image) {

            $path = $image->store('gallery', 'public');

            $uploaded[] = GalleryImage::create([
                'title' => pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME),
                'image' => $path,
            ]);
        }

        return response()->json($uploaded, 201);
    }

    /**
     * Delete a gallery image.
     */
    public function destroy(GalleryImage $gallery): JsonResponse
    {
        if ($gallery->image) {
            Storage::disk('public')->delete($gallery->image);
        }

        $gallery->delete();

        return response()->json([
            'message' => 'Gallery image deleted successfully.'
        ]);
    }
}