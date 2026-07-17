<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class GalleryImage extends Model
{
    protected $table = 'gallery_images';

    protected $fillable = [
        'title',
        'image',
    ];

    protected $appends = [
        'image_url',
    ];

    public function getImageUrlAttribute(): string
    {
        if (!$this->image) {
            return '';
        }

        return Storage::url($this->image);
    }
}