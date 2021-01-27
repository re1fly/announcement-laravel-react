<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/signup', [AuthController::class, 'signup']);

    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('/logout', [AuthController::class, 'logout']);
        Route::get('/user', [AuthController::class, 'user']);
    });
});

Route::group(["prefix" => "announcement"], function () {
    Route::get('/', [AnnouncementController::class, 'index']);
    Route::post('/create', [AnnouncementController::class,'store']);
    Route::post('/edit/{id}', [AnnouncementController::class,'getAnnouncement']);
    Route::post('/{id}', [AnnouncementController::class,'getAnnouncement']);
    Route::put('/{id}', [AnnouncementController::class,'update']);
    Route::delete('/delete/{id}', [AnnouncementController::class,'delete']);
});
