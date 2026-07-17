<?php

namespace App\Http\Controllers\Api\Website;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookingRequest;
use App\Models\Booking;
use Illuminate\Http\JsonResponse;

class BookingController extends Controller
{
    /**
     * Store a new safari booking request.
     */
    public function store(StoreBookingRequest $request): JsonResponse
    {
        $booking = Booking::create([

            'package_id'        => $request->package_id,

            'full_name'         => $request->full_name,

            'email'             => $request->email,

            'phone'             => $request->phone,

            'country'           => $request->country,

            'destination'       => $request->destination,

            'package_name'      => $request->package_name,

            'travel_date'       => $request->travel_date,

            'flexible_dates'    => filter_var(
                $request->flexible_dates,
                FILTER_VALIDATE_BOOLEAN
            ),

            'duration'          => $request->duration,

            'adults'            => $request->adults,

            'children'          => $request->children ?? 0,

            'accommodation'     => $request->accommodation,

            'safari_type'       => $request->safari_type,

            'budget'            => $request->budget,

            'special_requests'  => $request->special_requests,

            // Default booking status
            'status'            => 'Pending',

        ]);

        return response()->json([
            'success' => true,
            'message' => 'Your safari booking request has been received successfully.',
            'data'    => $booking,
        ], 201);
    }
}