<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'package_id',
        'full_name',
        'email',
        'phone',
        'country',
        'destination',
        'package_name',
        'travel_date',
        'flexible_dates',
        'duration',
        'adults',
        'children',
        'accommodation',
        'safari_type',
        'budget',
        'special_requests',
        'status',
    ];

    protected $casts = [
        'travel_date' => 'date',
        'flexible_dates' => 'boolean',
    ];

    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}