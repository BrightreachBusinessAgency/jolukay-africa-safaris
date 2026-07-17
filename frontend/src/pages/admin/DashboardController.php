<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Package;
use App\Models\GalleryImage;
use App\Models\Booking;
use App\Models\Customer;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        return response()->json([

            'packages' => Package::count(),

            'gallery' => GalleryImage::count(),

            'bookings' => Booking::count(),

            'customers' => Customer::count(),

            'users' => User::count(),

            'recentBookings' => Booking::latest()
                ->take(5)
                ->get(),

            'recentCustomers' => Customer::latest()
                ->take(5)
                ->get(),

        ]);
    }
}