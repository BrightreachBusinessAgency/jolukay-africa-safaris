<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validation rules.
     */
    public function rules(): array
    {
        return [

            'package_id' => 'nullable|exists:packages,id',

            'full_name' => 'required|string|max:255',

            'email' => 'required|email|max:255',

            'phone' => 'required|string|max:30',

            'country' => 'nullable|string|max:100',

            'destination' => 'nullable|string|max:150',

            'package_name' => 'nullable|string|max:255',

            'travel_date' => 'nullable|date',

            'flexible_dates' => 'nullable|boolean',

            'duration' => 'nullable|string|max:100',

            'adults' => 'required|integer|min:1',

            'children' => 'nullable|integer|min:0',

            'accommodation' => 'nullable|in:Budget,Mid-range,Luxury,Ultra Luxury',

            'safari_type' => 'nullable|in:Private Safari,Shared Safari,Group Safari',

            'budget' => 'nullable|string|max:100',

            'special_requests' => 'nullable|string',

        ];
    }

    /**
     * Friendly field names.
     */
    public function attributes(): array
    {
        return [
            'full_name' => 'Full Name',
            'travel_date' => 'Travel Date',
            'package_name' => 'Preferred Package',
            'special_requests' => 'Special Requests',
        ];
    }
}