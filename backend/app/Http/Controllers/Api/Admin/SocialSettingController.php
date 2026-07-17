<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\SocialSetting;
use Illuminate\Http\Request;

class SocialSettingController extends Controller
{
    public function index()
    {
        return response()->json(
            SocialSetting::firstOrCreate([])
        );
    }

    public function update(Request $request)
    {
       $validated = $request->validate([
    'phone' => 'nullable|string|max:255',
    'email' => 'nullable|string|max:255',

    'facebook' => 'nullable|string|max:255',
    'instagram' => 'nullable|string|max:255',
    'linkedin' => 'nullable|string|max:255',
    'twitter' => 'nullable|string|max:255',
    'youtube' => 'nullable|string|max:255',
    'tiktok' => 'nullable|string|max:255',
    'whatsapp' => 'nullable|string|max:255',

    'seo_title' => 'nullable|string|max:255',
    'seo_description' => 'nullable|string',
    'seo_keywords' => 'nullable|string',

    'copyright_text' => 'nullable|string',
]);

        $settings = SocialSetting::firstOrCreate([]);

        $settings->update($validated);

        return response()->json([
            'message' => 'Social settings updated successfully.',
            'data' => $settings,
        ]);
    }
}