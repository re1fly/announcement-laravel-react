<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Display extends Model
{
    use HasFactory;

    protected $table = "displays";
    protected $fillable = ['user_id', 'announcement_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function announcement()
    {
        return $this->belongsTo(Announcement::class, 'announcement_id');
    }

}
