<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class projects extends Model
{
    use HasFactory;

    public function projectPayments()
    {
        return $this->hasMany(Payment::class);
    }

    protected $casts = [
        'deadline' => 'datetime',
    ];

    protected $fillable = ['title', 'min_amount', 'goal_amount', 'deadline', 'description', 'header', 'user_id'];

}
