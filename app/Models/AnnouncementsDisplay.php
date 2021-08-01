<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AnnouncementsDisplay extends Model
{
    use HasFactory, softDeletes;

    protected $table = "announcements_display";
    protected $fillable = ['display_id', 'announcement_id'];

    public function display()
    {
        return $this->belongsTo(Display::class, 'display_id');
    }

    public function announcement()
    {
        return $this->belongsTo(Announcement::class, 'announcement_id');
    }
}
