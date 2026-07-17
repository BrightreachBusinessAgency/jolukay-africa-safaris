<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialSetting extends Model
{
    protected $fillable = [
        'phone',
        'email',

        'facebook',
        'instagram',
        'linkedin',
        'twitter',
        'youtube',
        'tiktok',
        'whatsapp',

        'seo_title',
        'seo_description',
        'seo_keywords',

        'copyright_text',
    ];
}