<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class payments extends Model
{
    use HasFactory;
    public static function getCurrentAmount()
    {
        $data = self::orderBy('updated_at', 'desc')->get();
        #project_idごとに合計金額と寄付人数をを計算する
        $currentAmount = [];
        $numDonations = [];

        foreach ($data as $key => $value) {
            // 合計金額を計算
            if (array_key_exists($value->project_id, $currentAmount)) {
                $currentAmount[$value->project_id] += $value->amount;
            } else {
                $currentAmount[$value->project_id] = $value->amount;
            }

            // 寄付人数を計算
            if (array_key_exists($value->project_id, $numDonations)) {
                $numDonations[$value->project_id] += 1;
            } else {
                $numDonations[$value->project_id] = 1;
            }
        }
        return [$currentAmount, $numDonations];
    }

    protected $fillable = ['user_id', 'project_id', 'amount'];

}
