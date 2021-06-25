<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/


Broadcast::channel('channel-announcement', function ($user, $userId) {
    if ($user->id === $userId) {
        return array('name' => $user->name);
    }
});
//Broadcast::channel('channel-announcement', function ($user) {
//    return $user;
//});
