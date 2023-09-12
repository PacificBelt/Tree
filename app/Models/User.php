<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use SebastianBergmann\CodeCoverage\Report\Xml\Project;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public function userProjects()
    {
        return $this->hasMany(Project::class);
    }

    public function userPayments()
    {
        return $this->hasMany(Payment::class);
    }
    //idの配列を渡すと、そのidのaccount_nameの配列を返す
    public static function getNames(array $ids)
    {
        $users = self::whereIn('id', $ids)->get();
        $names = [];
        foreach ($users as $key => $value) {
            $names[$value->id] = $value->account_name;
        }
        return $names;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'account_name',
        'icon',
        'url',
        'point'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $attributes = [
        'icon' => null,
        'url' => null,
        'point' => 0,
        'introduction' => null,
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
