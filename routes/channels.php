<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;

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

Broadcast::channel('channel-display.{userId}', function ($user, $userId) {
//    if ($user->id === $userId) {
//        return array('name' => $user->name);
//    }
return true;
//        if ($user->canJoinRoom($userId)) {
//        return ['id' => $user->id, 'name' => $user->name];
//    }

});
