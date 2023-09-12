<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\PaymentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Xml\Project;

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

Route::resource('project', ProjectController::class);

Route::get('/', function () {
    return Inertia::render('Projects', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/project/show/{id}', [ProjectController::class, 'show'])->name('project.show');
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

Route::get('/project/edit/{id}', [ProjectController::class, 'edit'])->name('project.edit');
Route::post('/project/edit/{id}', [ProjectController::class, 'update']);

Route::get('/payment/{id}', [PaymentController::class, 'create'])
->middleware(['auth', 'verified'])->name('payment');
Route::post('/payment/{id}', [PaymentController::class, 'store']);


require __DIR__.'/auth.php';

