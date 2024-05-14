<?php
use App\Http\Controllers\SuscripcionesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PromptController;
use BeyondCode\LaravelWebSockets\Http\Controllers\WebSocketController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\CambiarPerfilController;
use App\Http\Controllers\InformacionPersonalController;
// Routes requiring authentication
Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/enviar_formulario', [PromptController::class, 'enviarFormulario']);
    Route::get('/prompts', [PromptController::class, 'getPrompts']);
    Route::post('/change-password', [AuthController::class, 'changePassword']);
    Route::post('/cambiar-perfil', [CambiarPerfilController::class, 'subirImagen']);
    Route::get('/imagen-perfil', [CambiarPerfilController::class, 'obtenerImagenPerfil']);
    Route::post('/informacion-personal', [InformacionPersonalController::class, 'store']);
    Route::get('/informacion-personal', [InformacionPersonalController::class, 'show']);
    Route::post('/comprar-suscripcion', [SuscripcionesController::class, 'comprar']);
    Route::delete('/cancelar-suscripcion', [SuscripcionesController::class, 'eliminar']);
    Route::delete('/eliminar-cuenta', [AuthController::class, 'eliminarCuenta']);
    Route::get('/ver-suscripcion', [SuscripcionesController::class, 'getAll']);
});


Route::post('email/verification-notification', [EmailVerificationController::class, 'sendVerificationEmail'])->middleware(['auth:sanctum']);
Route::get('verify-email/{id}/{hash}', [EmailVerificationController::class, 'verify'])->name('verification.verify')->middleware(['auth:sanctum']);
Route::post('/reset', [AuthController::class, 'reset']);
Route::get('/reset', [AuthController::class, 'reset']);
Route::post('/registro', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot', [AuthController::class, 'forgot']);
Route::get('/check-token', [AuthController::class, 'checkToken']);
Route::post('/receive-email', [EmailController::class, 'receiveEmail']);
