<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DisplayController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\UserOfflineController;
use App\Http\Controllers\UserOnlineController;
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

Route::group(['prefix' => 'auth'], function () {

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/signup', [AuthController::class, 'signup']);

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('/logout', [AuthController::class, 'logout']);
        Route::get('/user', [AuthController::class, 'user']);
        Route::get('/user-all', [AuthController::class, 'getAllUser']);

        //presence_channel
        Route::put('/user/{user}/online', UserOnlineController::class);
        Route::put('/user/{user}/offline', UserOfflineController::class);
    });

});

Route::group(["prefix" => "display"], function () {
//            Route::post('/create', [DisplayController::class,'store']);
//    Route::get('/{id}', [DisplayController::class, 'getDisplay']);
    Route::post('/edit/{id}', [DisplayController::class, 'updateDisplay']);
    Route::delete('/delete/{id}', [DisplayController::class, 'destroy']);

});

Route::group(["prefix" => "announcement"], function () {

    Route::get('/', [AnnouncementController::class, 'index']);
    Route::post('/create', [AnnouncementController::class, 'store']);
    Route::get('/{id}', [AnnouncementController::class, 'getAnnouncement']);
    Route::post('edit/{id}', [AnnouncementController::class, 'update']);
    Route::delete('/delete/{id}', [AnnouncementController::class, 'delete']);
    Route::get('/get-by-user/{id}', [AnnouncementController::class, 'getAnnouncementByUserId']);
    Route::post('/image-announcement/', [ImageController::class, 'ImageAcceptor']);

//    Route::get('/', [AnnouncementController::class, 'index']);
//    Route::post('/', [AnnouncementController::class,'store']);
//    Route::get('/{id}', [AnnouncementController::class,'getAnnouncement']);
//    Route::post('/{id}/edit', [AnnouncementController::class,'update']);
//    Route::post('{id}/delete', [AnnouncementController::class,'delete']);

});

Route::post('/update-user/{id}', [AuthController::class, 'updateIsActive']);



//Route::get('announcementByUsers/{userId}',[AnnouncementController::class,'getAnnouncementByUserId']);
