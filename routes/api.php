<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\WordController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::get('/login', [AuthController::class, 'login']);
    Route::get('/register', [AuthController::class, 'register']);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);

    /*
    |--------------------------------------------------------------------------
    | API Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register API routes for your application. These
    | routes are loaded by the RouteServiceProvider and all of them will
    | be assigned to the "api" middleware group. Make something great!
    |
    */
    
   

});

    Route::get('words',[WordController::class, 'index']);  //->middleware('auth:api');
    Route::post('words',[WordController::class, 'store']);
    Route::get('words/{id}',[WordController::class, 'show']);//->middleware('jwt'
    Route::get('words/{id}/edit',[WordController::class, 'edit']);
    Route::put('words/{id}/update',[WordController::class, 'update']);
    Route::delete('words/{id}/delete',[WordController::class, 'destroy']);


/*--------------------------------------------------------------------------*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

/*
-->this a test 
Route::get('word' ,function(){
    return "This is word API ";
});
*/


