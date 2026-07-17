<?php

namespace App\Http\Controllers\Api\Website;

use App\Http\Controllers\Controller;
use App\Models\SocialSetting;

class SocialSettingController extends Controller
{
    public function index()
    {
        return response()->json(
            SocialSetting::first()
        );
    }
}