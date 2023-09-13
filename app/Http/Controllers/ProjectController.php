<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\projects;
use App\Models\payments;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Inertia\Inertia;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;


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

        //ddd($projects);
        return Inertia::render('Projects', ['projects' => $projects]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //プロジェクトの作成画面に遷移
        return Inertia::render('Post/StandUpProject');
    }

    /**
     * Store a newly created resource in storage.
     */
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        //プロジェクトのバリデーション
        //現在は画像以外必須項目
        $request->validate([
            'title' => 'required|string|max:255',
            'min_amount' => 'required|integer|min:0', //正の整数
            'goal_amount' => 'required|integer|min:0',
            'deadline' => 'required|date|after:today', //今日以降の日付
            'description' => 'required|string|max:500',
            'header' => 'nullable|image' //写真
        ]);


        $projectData = [
            'title' => $request->title,
            'min_amount' => $request->min_amount,
            'goal_amount' => $request->goal_amount,
            'deadline' => $request->deadline,
            'description' => $request->description,
            'header' => $request->header,
            'user_id' => Auth::user()->id,
        ];

        $project = projects::create($projectData);

        return redirect(RouteServiceProvider::HOME);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //詳細からもどってきた場合のとりあえずの対処
        if ($id == "search") {
            return redirect(RouteServiceProvider::HOME);
        } else {
            $project = projects::find($id);
            [$currentAmount, $numDonations] = payments::getCurrentAmount();

            //プロジェクトの作成者のアカウント名をいれる
            $user = User::find($project->user_id);
            $project->userName = $user->account_name;

            //プロジェクトの支援状況
            if (isset($currentAmount[$project->id])) {
                $project->currentAmount = $currentAmount[$project->id];
                $project->numDonations = $numDonations[$project->id];
            } else {
                $project->currentAmount = 0;
                $project->numDonations = 0;
            }

            return Inertia::render('ProjectDetail', ['project' => $project]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = projects::find($id);
        //プロジェクトの編集画面に遷移
        return Inertia::render('Post/EditProject', ['project' => $project]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //プロジェクトのバリデーション
        //現在は画像以外必須項目
        $request->validate([
            'title' => 'string|max:255',
            'min_amount' => 'integer|min:0', //正の整数
            'description' => 'string|max:500',
            'header' => 'nullable|image' //写真
        ]);

        $project = projects::find($id);

        if ($request->title !== null) {
            $project->title = $request->title;
        }

        if ($request->min_mount !== null) {
            $project->min_mount = $request->min_mount;
        }

        if ($request->description != null) {
            $project->description = $request->description;
        }

        if ($request->header !== null) {
            $project->header = $request->header;
        }
        //ddd($request);
        $project->save();

        return redirect(RouteServiceProvider::HOME);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //

    }
}
