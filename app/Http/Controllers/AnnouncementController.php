<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $announcement = Announcement::all();
        return $announcement->toJSON;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        $createAnnounce = Announcement::create([
            'title' => $validatedData['title'],
            'content' => $validatedData['content']
        ]);

        $message = [
            'success' => true,
            'message' => 'Create Announcement Success'
        ];

        return response()->json($message);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function getAnnouncement($id)
    {
        $announcement = Announcement::find($id);

        return $announcement->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $announcement = Announcement::find($id);
        $announcement->title = $validatedData['title'];
        $announcement->content = $validatedData['content'];
        $announcement->save();

        $message = [
            'success' => true,
            'message' => 'Update Announcement Success'
        ];

        return response()->json($message);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $announcement = Announcement::find($id);
        if (!empty($announcement)) {
            $announcement->delete();
            $message = [
                'success' => true,
                'message' => 'Delete Announcement Success'
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
