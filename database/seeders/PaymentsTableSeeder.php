<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PaymentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('paymentsテーブルにダミーデータを挿入します。');

        // 利用可能なプロジェクトIDのリストを取得
        $projectIds = DB::table('projects')->pluck('id')->toArray();

        // すべてのユーザーに対して
        for ($userId = 1; $userId <= 10; $userId++) {

            // ランダムな数のプロジェクト（1〜3）に対して
            $numProjects = rand(1, 3);

            // 既に支払ったプロジェクトを追跡するための配列
            $paidProjects = [];

            for ($i = 0; $i < $numProjects; $i++) {

                // ランダムなプロジェクトIDを選択（ただし、既に支払ったプロジェクトは除く）
                do {
                    $projectId = $projectIds[array_rand($projectIds)];
                } while (in_array($projectId, $paidProjects));

                // このプロジェクトIDを既に支払ったプロジェクトのリストに追加
                $paidProjects[] = $projectId;

                // ランダムな金額を選択
                $amount = rand(3000, 10000);

                // データベースに挿入
                DB::table('payments')->insert([
                    'user_id' => $userId,
                    'project_id' => $projectId,
                    'amount' => $amount,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }
        $this->command->info('paymentsテーブルにダミーデータを挿入しました。');
    }
}
