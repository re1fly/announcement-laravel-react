<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class ImageController extends Controller
{
    public function ImageAcceptor(Request $request)
    {
        $baseurl = URL::to('storage/');
        $path = $request->file('file')->store('public');
        $removePublic = str_replace('public', '', $path);
        return response()->json([
            'location' => $baseurl.$removePublic
        ]);
    }
}
