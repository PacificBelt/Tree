<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\PaymentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ProjectController::class, 'index']);
Route::post('/project/search', [SearchController::class, 'index'])->name('project.search');

Route::group(
    ['middleware' => 'auth'],
    function () {
        Route::resource('project', ProjectController::class); //いろいろなルーティングが含まれるので超超超注意！！

        Route::get('/mypage/created', [SearchController::class, 'created'])->name('project.created');
        Route::get('/mypage/donated', [SearchController::class, 'donated'])->name('project.donated');

        Route::get('/dashboard', [ProjectController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

        Route::middleware('auth')->group(function () {
            Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
            Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
            Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        });

        Route::get('/project', function () {
            return Inertia::render('ProjectDetail');
        })->middleware(['auth', 'verified'])->name('project');

        Route::get('/project/create', [ProjectController::class, 'create'])
            ->middleware(['auth', 'verified'])->name('project.create');
        Route::post('/project/create', [ProjectController::class, 'store']);


        Route::get('/show/{id}', [ProjectController::class, 'show'])->name('show');

        Route::get('/project/edit/{id}', [ProjectController::class, 'edit'])->name('project.edit');
        Route::post('/project/update/{id}', [ProjectController::class, 'update'])->name('project.update');;


        Route::get('/payment/{id}', [PaymentController::class, 'create'])
            ->middleware(['auth', 'verified'])->name('payment');
        Route::post('/payment/{id}', [PaymentController::class, 'store']);
    }
);

require __DIR__ . '/auth.php';
