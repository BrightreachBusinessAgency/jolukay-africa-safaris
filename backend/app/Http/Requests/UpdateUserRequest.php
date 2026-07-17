<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validation Rules
     */
    public function rules(): array
    {
        return [

            'name' => [
                'required',
                'string',
                'max:255',
            ],

            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($this->user),
            ],

            'password' => [
                'nullable',
                'string',
                'min:6',
            ],

            'role' => [
                'required',
                Rule::in([
                    'Super Admin',
                    'Admin',
                    'Sales Officer',
                    'Content Manager',
                ]),
            ],

            'status' => [
                'required',
                Rule::in([
                    'Active',
                    'Inactive',
                ]),
            ],

        ];
    }
}