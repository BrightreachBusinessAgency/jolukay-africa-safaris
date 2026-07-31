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

    /**
     * Use slug instead of id for route model binding.
     */
  

    /**
     * Full URL for the featured image.
     */
 public function getFeaturedImageUrlAttribute(): ?string
{
    if (!$this->featured_image) {
        return null;
    }

    // If already a complete URL, return it unchanged.
    if (str_starts_with($this->featured_image, 'http')) {
        return $this->featured_image;
    }

    return asset('storage/' . ltrim($this->featured_image, '/'));
}
}