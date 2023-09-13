<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\projects;
use App\Models\payments;
use App\Models\User;
use Inertia\Inertia;
use Auth;

class SearchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(request $request)
    {
        $keyword = $request->keyword;
        $users  = User::where('account_name', 'like', "%{$keyword}%")->pluck('id')->all();
        $projects = projects::query()
            ->where('title', 'LIKE', "%{$keyword}%")
            ->orWhere('description', 'LIKE', "%{$keyword}%")
            ->orWhereIn('user_id', $users)
            ->get();

        [$currentAmount, $numDonations] = payments::getCurrentAmount();
        //projectから,project_idをキーとしたuser_idの連想配列を作成する
        $userIds = [];
        foreach ($projects as $key => $value) {
            $userIds[$value->id] = $value->user_id;
        }
        $userName = User::getNames($userIds);
        //projectsにcurrentAmountとnumDonationsとuserNameを追加する(project_idをキーとした連想配列)
        foreach ($projects as $key => $value) {
            $projects[$key]['userName'] = $userName[$value->user_id];

            // プロジェクトが 支払いデータを持っていなければ0を返す
            if (isset($currentAmount[$value->id])) {
                $projects[$key]['currentAmount'] = $currentAmount[$value->id];
                $projects[$key]['numDonations'] = $numDonations[$value->id];
            } else {
                $projects[$key]['currentAmount'] = 0;
                $projects[$key]['numDonations'] = 0;
            }
        }
        return Inertia::render('Projects', ['projects' => $projects]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function created()
    {

        $user_id = Auth::user()->id;
        $projects = projects::query()
            ->where('user_id', $user_id)
            ->get();
        [$currentAmount, $numDonations] = payments::getCurrentAmount();
        //projectから,project_idをキーとしたuser_idの連想配列を作成する
        $userIds = [];
        foreach ($projects as $key => $value) {
            $userIds[$value->id] = $value->user_id;
        }
        $userName = User::getNames($userIds);
        //projectsにcurrentAmountとnumDonationsとuserNameを追加する(project_idをキーとした連想配列)
        foreach ($projects as $key => $value) {
            $projects[$key]['userName'] = $userName[$value->user_id];

            // プロジェクトが 支払いデータを持っていなければ0を返す
            if (isset($currentAmount[$value->id])) {
                $projects[$key]['currentAmount'] = $currentAmount[$value->id];
                $projects[$key]['numDonations'] = $numDonations[$value->id];
            } else {
                $projects[$key]['currentAmount'] = 0;
                $projects[$key]['numDonations'] = 0;
            }
        }
        return Inertia::render('CreatedProjects', ['projects' => $projects]);
    }

    public function donated()
    {
        $user_id = Auth::user()->id;
        $project_ids = payments::query()
            ->where('user_id', $user_id)
            ->pluck('project_id')
            ->all();
        $projects = projects::query()
            ->whereIn('id', $project_ids)
            ->get();
        [$currentAmount, $numDonations] = payments::getCurrentAmount();
        //projectから,project_idをキーとしたuser_idの連想配列を作成する
        $userIds = [];
        foreach ($projects as $key => $value) {
            $userIds[$value->id] = $value->user_id;
        }
        $userName = User::getNames($userIds);
        //projectsにcurrentAmountとnumDonationsとuserNameを追加する(project_idをキーとした連想配列)
        foreach ($projects as $key => $value) {
            $projects[$key]['userName'] = $userName[$value->user_id];

            // プロジェクトが 支払いデータを持っていなければ0を返す
            if (isset($currentAmount[$value->id])) {
                $projects[$key]['currentAmount'] = $currentAmount[$value->id];
                $projects[$key]['numDonations'] = $numDonations[$value->id];
            } else {
                $projects[$key]['currentAmount'] = 0;
                $projects[$key]['numDonations'] = 0;
            }
        }
        return Inertia::render('DonatedProjects', ['projects' => $projects]);
    }
}
