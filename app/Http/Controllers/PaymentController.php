<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\projects;
use App\Models\payments;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create(string $id)
    {
        $project = projects::find($id);

        //プロジェクトの作成画面に遷移
        return Inertia::render('Settlement', ['project' => $project]);
    }

    /**
     * Store a newly created resource in storage.
     */
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request, string $id)
    {
        $request->validate([
            'amount' => 'required|numeric',
        ]);


        payments::create([
            'user_id' => Auth::user()->id,
            'product_id' => $id,
            'amount' => $request->amount,
        ]);

        //詳細画面に遷移変更
        return redirect(RouteServiceProvider::PROJECT);
    }

}
