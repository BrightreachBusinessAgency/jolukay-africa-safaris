<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Admin\DashboardController;
use App\Http\Controllers\Api\Admin\AuthController;
use App\Http\Controllers\Api\Admin\GalleryController;
use App\Http\Controllers\Api\Admin\PackageController as AdminPackageController;
use App\Http\Controllers\Api\Admin\BookingController as AdminBookingController;
use App\Http\Controllers\Api\Admin\CustomerController as AdminCustomerController;
use App\Http\Controllers\Api\Admin\SocialSettingController as AdminSocialSettingController;
use App\Http\Controllers\Api\Admin\UserController as AdminUserController;

use App\Http\Controllers\Api\Website\GalleryController as WebsiteGalleryController;
use App\Http\Controllers\Api\Website\PackageController as WebsitePackageController;
use App\Http\Controllers\Api\Website\CustomerController;
use App\Http\Controllers\Api\Website\BookingController as WebsiteBookingController;
use App\Http\Controllers\Api\Website\SocialSettingController as WebsiteSocialSettingController;

/*
|--------------------------------------------------------------------------
| Public API
|--------------------------------------------------------------------------
*/

Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'JOLUKAY API is working!',
    ]);
});

// Website Packages
Route::get('/packages', [WebsitePackageController::class, 'index']);
Route::get('/packages/{package}', [WebsitePackageController::class, 'show']);

// Website Gallery
Route::get('/gallery', [WebsiteGalleryController::class, 'index']);

// Website Contact
Route::post('/contact', [CustomerController::class, 'store']);

// Website Booking
Route::post('/bookings', [WebsiteBookingController::class, 'store']);

// Website Social Settings
Route::get('/social-settings', [WebsiteSocialSettingController::class, 'index']);

/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

Route::post('/admin/login', [AuthController::class, 'login']);

/*
|--------------------------------------------------------------------------
| Protected Admin API
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
Route::get('/admin/dashboard', [DashboardController::class, 'index']);
    /*
    |--------------------------------------------------------------------------
    | Authentication
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/user', [AuthController::class, 'me']);
    Route::post('/admin/logout', [AuthController::class, 'logout']);

    /*
    |--------------------------------------------------------------------------
    | Packages
    |--------------------------------------------------------------------------
    */

    Route::apiResource('/admin/packages', AdminPackageController::class);

    /*
    |--------------------------------------------------------------------------
    | Gallery
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/gallery', [GalleryController::class, 'index']);
    Route::post('/admin/gallery', [GalleryController::class, 'store']);
    Route::delete('/admin/gallery/{gallery}', [GalleryController::class, 'destroy']);

    /*
    |--------------------------------------------------------------------------
    | Bookings
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/bookings', [AdminBookingController::class, 'index']);
    Route::get('/admin/bookings/{booking}', [AdminBookingController::class, 'show']);
    Route::put('/admin/bookings/{booking}', [AdminBookingController::class, 'update']);
    Route::delete('/admin/bookings/{booking}', [AdminBookingController::class, 'destroy']);

    /*
    |--------------------------------------------------------------------------
    | Customer Inquiries
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/customers', [AdminCustomerController::class, 'index']);
    Route::get('/admin/customers/{customer}', [AdminCustomerController::class, 'show']);
    Route::put('/admin/customers/{customer}', [AdminCustomerController::class, 'update']);
    Route::delete('/admin/customers/{customer}', [AdminCustomerController::class, 'destroy']);

    /*
    |--------------------------------------------------------------------------
    | Users
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/users', [AdminUserController::class, 'index']);
    Route::post('/admin/users', [AdminUserController::class, 'store']);
    Route::get('/admin/users/{user}', [AdminUserController::class, 'show']);
    Route::put('/admin/users/{user}', [AdminUserController::class, 'update']);
    Route::delete('/admin/users/{user}', [AdminUserController::class, 'destroy']);

    /*
    |--------------------------------------------------------------------------
    | Social Settings
    |--------------------------------------------------------------------------
    */

    Route::get('/admin/social-settings', [AdminSocialSettingController::class, 'index']);
    Route::put('/admin/social-settings', [AdminSocialSettingController::class, 'update']);

});