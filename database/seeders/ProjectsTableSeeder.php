<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->command->info('projectsテーブルにダミーデータを挿入します。');
        $json = File::get(database_path('data/projects.json'));
        $data = json_decode($json);
        foreach ($data as $obj) {
            DB::table('projects')->insert([
                'title' => $obj->title,
                'user_id' => $obj->user_id,
                'min_amount' => $obj->min_amount,
                'goal_amount' => $obj->goal_amount,
                'deadline' => $obj->deadline,
                'description' => $obj->description,
                'header' => $obj->header,
                'created_at' => $obj->created_at,
                'updated_at' => $obj->updated_at,
            ]);
        }
        $this->command->info('projectsテーブルにダミーデータを挿入しました。');
    }
}
