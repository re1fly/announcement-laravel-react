<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DisplaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $displayUsers = [
            [
                'name' => "Meeting Room",
                'email' => "meeting@globalxtreme.net",
                'password' => bcrypt('useruser'),
                'is_admin' => 0,
            ],
            [
                'name' => "Office Room",
                'email' => "office@globalxtreme.net",
                'password' => bcrypt('useruser'),
                'is_admin' => 0,
            ],
            [
                'name' => "Canteen",
                'email' => "canteen@globalxtreme.net",
                'password' => bcrypt('useruser'),
                'is_admin' => 0,
            ],
            [
                'name' => "admin",
                'email' => "admin@globalxtreme.net",
                'password' => bcrypt('adminadmin'),
                'is_admin' => 1,
            ]
        ];

        \DB::table('users')->insert($displayUsers);
    }
}
