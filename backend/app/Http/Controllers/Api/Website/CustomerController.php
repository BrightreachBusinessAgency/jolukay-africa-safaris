<?php

namespace App\Http\Controllers\Api\Website;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePublicContactRequest;
use App\Models\Customer;
use Illuminate\Http\JsonResponse;

class CustomerController extends Controller
{
    /**
     * Store a customer inquiry.
     */
    public function store(StorePublicContactRequest $request): JsonResponse
    {
        $customer = Customer::create([
            'full_name' => $request->name,
            'email'     => $request->email,
            'phone'     => $request->phone,
            'subject'   => $request->subject,
            'message'   => $request->message,
            'status'    => 'New',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Your inquiry has been submitted successfully.',
            'data'    => $customer,
        ], 201);
    }
}