<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->command->info('ダミーデータ作成を開始します。');

        $this->command->info('usersテーブルにダミーデータを挿入します。');
        \App\Models\User::factory(10)->create();
        $this->command->info('usersテーブルにダミーデータを挿入しました。');

        $this->call([
            ProjectsTableSeeder::class,
            PaymentsTableSeeder::class,
        ]);

        $this->command->info('ダミーデータ作成が完了しました。');


        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
