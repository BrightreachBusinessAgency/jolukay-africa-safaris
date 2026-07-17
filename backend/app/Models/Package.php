<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Package extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'location',
        'safari_type',
        'duration',
        'price',
        'summary',
        'itinerary',
        'inclusions',
        'exclusions',
        'featured_image',
        'published',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'published' => 'boolean',
    ];

    protected $appends = [
        'featured_image_url',
    ];

    public function getFeaturedImageUrlAttribute(): ?string
    {
        if (!$this->featured_image) {
            return null;
        }

        return Storage::disk('public')->url($this->featured_image);
    }
}