<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePackageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $packageId = $this->route('package')?->id;

        return [
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', "unique:packages,slug,{$packageId}"],
            'location' => ['required', 'string', 'max:255'],
            'safari_type' => ['required', 'string', 'max:255'],
            'duration' => ['required', 'string', 'max:255'],
            'price' => ['required', 'numeric', 'min:0'],

            'summary' => ['nullable', 'string'],
            'itinerary' => ['nullable', 'string'],
            'inclusions' => ['nullable', 'string'],
            'exclusions' => ['nullable', 'string'],

            'featured_image' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:5120',
            ],

            'published' => ['nullable', 'boolean'],
        ];
    }

    public function messages(): array
    {
        return [
            'featured_image.image' => 'Please upload a valid image.',
            'featured_image.mimes' => 'Image must be JPG, JPEG, PNG or WEBP.',
            'featured_image.max' => 'Image size must not exceed 5MB.',
            'price.numeric' => 'Price must be a valid number.',
            'price.min' => 'Price cannot be negative.',
        ];
    }
}