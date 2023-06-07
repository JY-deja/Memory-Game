<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/',function(){ return view('word.home');});

Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', function () { return view('word.dashboard');})->name('dashboard');
    Route::get('/Words', function () { return view('word.tableWords');})->name('Words');
    Route::get('/levels', function() { return view('word.levels');})->name('levels');
    // Route::get('/game?level={id}',function(){ return view('word.game');});
    Route::get('/game', function () {
        $level = request('level');
        return view('word.game');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');       
});
    

Route::get('/welcome', function () { 
    return view('bright.welcome2');
});


Route::get('/test',function(){ return view('word.test');});

require __DIR__.'/auth.php';
