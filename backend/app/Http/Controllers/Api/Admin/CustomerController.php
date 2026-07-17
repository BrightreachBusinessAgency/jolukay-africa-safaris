<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $customers = Customer::latest()->paginate(15);

        return response()->json($customers);
    }

    public function show(Customer $customer)
    {
        return response()->json($customer);
    }

    public function update(Request $request, Customer $customer)
    {
        $request->validate([
            'status' => 'required|in:New,Contacted,Resolved,Closed',
        ]);

        $customer->update([
            'status' => $request->status,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Customer inquiry updated successfully.',
            'data' => $customer,
        ]);
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();

        return response()->json([
            'success' => true,
            'message' => 'Customer inquiry deleted successfully.',
        ]);
    }
}