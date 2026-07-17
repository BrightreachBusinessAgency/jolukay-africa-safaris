<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'message' => 'JOLUKAY Backend Running',
    ]);
});

Route::get('/upload-test', function () {
    return '
    <form action="/upload-test" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="_token" value="'.csrf_token().'">
        <input type="file" name="image">
        <button type="submit">Upload</button>
    </form>';
});

Route::post('/upload-test', function (Request $request) {

    if (!$request->hasFile('image')) {
        return response()->json([
            'message' => 'No file received',
        ], 400);
    }

    $file = $request->file('image');

    if (!$file->isValid()) {
        return response()->json([
            'message' => 'Upload failed',
            'error_code' => $file->getError(),
            'error_message' => $file->getErrorMessage(),
        ], 422);
    }

    $path = $file->store('test', 'public');

    return response()->json([
        'message' => 'Upload successful',
        'path' => $path,
    ]);
});