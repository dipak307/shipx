<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InquiriesController;


Route::get('/test', function () {
    return response()->json(['message' => 'API works testing']);
});


Route::prefix('api')->group(function () {
    Route::post('/inquiries', [InquiriesController::class,'store']);
    Route::put('/update-inquiry/{id}', [InquiriesController::class,'updateInquiry']);
    Route::get('/single-inquiry/{id}', [InquiriesController::class,'getInquiry']);
    Route::delete('/inquiry/{id}', [InquiriesController::class,'deleteInquiry']);
    Route::get('/all-inquiry', [InquiriesController::class,'getAll']);

});


