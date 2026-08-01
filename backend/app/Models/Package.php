<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
     * Get the full URL of the featured image.
     */
    public function getFeaturedImageUrlAttribute(): ?string
    {
        if (!$this->featured_image) {
            return null;
        }

        // Already a full URL
        if (str_starts_with($this->featured_image, 'http')) {
            return $this->featured_image;
        }

        return url('/api/images/' . dirname($this->featured_image) . '/' . basename($this->featured_image));
    }
}