<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PromptController;
use BeyondCode\LaravelWebSockets\Http\Controllers\WebSocketController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\EmailController;
Route::middleware(['auth:sanctum', 'verified'])->group(function(){
    Route::get('/user', function (Request $request){
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/enviar_formulario', [PromptController::class, 'enviarFormulario']);
    Route::get('/prompts', [PromptController::class, 'getPrompts']);
    Route::post('/change-password', [AuthController::class, 'changePassword']);
});


Route::post('/registro', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);



Route::post('email/verification-notification', [EmailVerificationController::class, 'sendVerificationEmail'])->middleware('auth:sanctum');
Route::get('verify-email/{id}/{hash}', [EmailVerificationController::class, 'verify'])->name('verification.verify')->middleware('auth:sanctum');



Route::post('/forgot', [AuthController::class, 'forgot']);
Route::post('/reset', [AuthController::class, 'reset']);



Route::post('/receive-email', [EmailController::class, 'receiveEmail']);

