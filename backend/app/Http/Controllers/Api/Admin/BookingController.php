<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Display all bookings.
     */
    public function index()
    {
        $bookings = Booking::with('package')
            ->latest()
            ->paginate(15);

        return response()->json($bookings);
    }

    /**
     * Display a single booking.
     */
    public function show(Booking $booking)
    {
        $booking->load('package');

        return response()->json($booking);
    }

    /**
     * Update booking status.
     */
    public function update(Request $request, Booking $booking)
    {
        $request->validate([
            'status' => 'required|in:Pending,Approved',
        ]);

        $booking->status = $request->status;
        $booking->save();

        return response()->json([
            'success' => true,
            'message' => 'Booking status updated successfully.',
            'data' => $booking,
        ]);
    }

    /**
     * Delete booking.
     */
    public function destroy(Booking $booking)
    {
        $booking->delete();

        return response()->json([
            'success' => true,
            'message' => 'Booking deleted successfully.',
        ]);
    }
}