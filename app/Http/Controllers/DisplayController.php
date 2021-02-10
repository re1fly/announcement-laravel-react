<?php

namespace App\Http\Controllers;

use App\Events\NewAnnouncement;
use App\Models\Announcement;
use App\Models\Display;
use App\Models\User;
use Illuminate\Http\Request;

class DisplayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
//    public function store(Request $request)
//    {
//        $validatedData = $request->validate([
//            'user_id' => 'required',
//            'announcement_id' => 'required',
//
//        ]);
//
//        $createDisplay = Display::create([
//            'user_id' => $validatedData['user_id'],
//            'announcement_id' => $validatedData['announcement_id']
//        ]);
//
//        $message = [
//            'success' => true,
//            'message' => 'Create Display Success',
//            'data' => $createDisplay
//        ];
//
//        return response()->json($message);
//    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
//    public function getDisplay($id)
//    {
//        $display = Display::where('user_id', $id)->get();
//
//        return $display->toJson();
//    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function updateDisplay(Request $request, $userId)
    {
        $validatedData = $request->validate([
            'announcement_id' => 'required',
        ]);

        $display = Display::where('user_id', $userId)->first();
        if ($display != null) {
            $display->announcement_id = $validatedData['announcement_id'];
            $display->save();
        } else {
            $display = Display::create([
                'user_id' => $userId,
                'announcement_id' => $validatedData['announcement_id']
            ]);
        }
        $announcement = Announcement::find($validatedData['announcement_id']);
        $message['user'] = $userId;
        $message['announcement'] = $announcement;
        $success = event(new NewAnnouncement($message));

        $message = [
            'success' => true,
            'message' => 'Update Announcement Success',
            'data' => $success
        ];

        return response()->json($message);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $display = Display::find($id);
        if (!empty($display)) {
            $display->delete();
            $message = [
                'success' => true,
                'message' => 'Delete Display Success'
            ];
            return response()->json($message);
        } else {
            $message = [
                'success' => false,
                'message' => 'Delete Announcement Failed'
            ];
            return response()->json($message);
        }
    }
}
