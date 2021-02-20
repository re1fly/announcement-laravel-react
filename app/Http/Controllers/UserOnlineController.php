<?php

namespace App\Http\Controllers;

use App\Events\UserOnline;
use Illuminate\Http\Request;
use App\Models\User;

class UserOnlineController extends Controller
{
    public function __invoke(User $user)
    {
        $user->status = 'online';
        $user->save();

        broadcast(new UserOnline($user));

//        return response()->json([
//            'success' => true,
//            'data' => $user
//        ], 201);
    }
}
