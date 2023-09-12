<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\projects;
use App\Models\payments;
use App\Models\User;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = projects::getAllOrderByUpdated_at();
        [$currentAmount, $numDonations] = payments::getCurrentAmount();
        //projectから,project_idをキーとしたuser_idの連想配列を作成する
        $userIds = [];
        foreach ($projects as $key => $value) {
            $userIds[$value->id] = $value->user_id;
        }
        $userName = User::getNames($userIds);
        //projectsにcurrentAmountとnumDonationsとuserNameを追加する(project_idをキーとした連想配列)
        foreach ($projects as $key => $value) {
            $projects[$key]['currentAmount'] = $currentAmount[$value->id];
            $projects[$key]['numDonations'] = $numDonations[$value->id];
            $projects[$key]['userName'] = $userName[$value->user_id];
        }

        //ddd($projects);
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
        //時間がないので一旦使い回しで行きます
        //時間があれば一つだけ取り出すように変更します
        $projects = projects::getAllOrderByUpdated_at();
        [$currentAmount, $numDonations] = payments::getCurrentAmount();
        //projectから,project_idをキーとしたuser_idの連想配列を作成する
        $userIds = [];
        foreach ($projects as $key => $value) {
            $userIds[$value->id] = $value->user_id;
        }
        $userName = User::getNames($userIds);
        //projectsにcurrentAmountとnumDonationsとuserNameを追加する(project_idをキーとした連想配列)
        foreach ($projects as $key => $value) {
            $projects[$key]['currentAmount'] = $currentAmount[$value->id];
            $projects[$key]['numDonations'] = $numDonations[$value->id];
            $projects[$key]['userName'] = $userName[$value->user_id];
        }
        $project = $projects[$id];
        return Inertia::render('ProjectDetail', ['project' => $project]);
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
}
