<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Announcement extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "announcements";
    protected $fillable = ['title', 'content'];

    public function displays()
    {
        return $this->hasMany(Display::class, 'announcement_id');
    }

}
