<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('login');
});
Route::get('/create-announcement', function () {
    return view('announcement');
});
Route::get('/display-list', function () {
    return view('display_list');
});
Route::get('/announcement-list', function () {
    return view('announcement_list');
});

Route::get('message', function () {
    $message['user'] = "ADMIN";
    $message['message'] =  "test announcement ";
    $success = event(new App\Events\NewAnnouncement($message));
    return $success;
});

//user display react
Route::get('display-announcement', function(){
    return view('user_display');
});
