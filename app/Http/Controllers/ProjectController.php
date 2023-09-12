<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\projects;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function create(): Response
    {
        //project/createというフロントの画面に遷移
        return Inertia::render('Post/StandUpProject');
    }
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {   
        //プロジェクトのバリデーション
        //現在は画像以外必須項目
        $request->validate([
            'title' => 'required|string|max:255',
            'min_amount' => 'required|integer|min:0',//正の整数
            'goal_amount' => 'required|integer|min:0',
            'deadline' => 'required|date|after:today',//今日以降の日付
            'description' => 'required|string|max:500',
            'header' => 'nullable|image'//写真
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
}
