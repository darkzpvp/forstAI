<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistroRequest;
use App\Http\Requests\ChangePasswordRequest;
use App\Notifications\PasswordResetNotification;
use App\Http\Requests\ResetPasswordRequest;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\PasswordReset;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Mail;
use App\Mail\ForgetPasswordMail;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rules\Password as PasswordRules;
use App\Http\Resources\UserResource;

class AuthController extends Controller
{
    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return [
            'user' => null
        ];
    }
    public function register(RegistroRequest $request)
    {
        //Validar el registro
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }
    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        if (!Auth::attempt($data)) {
            return response([
                'errors' => ['El email o el password son incorrectos']
            ], 422);
        }
        //Autenticar al usuario
        $user = Auth::user();
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }

    //Forget password api method
    public function changePassword(Request $request)
    {
      
        $request->validate([
            'current_password' => 'required|string',
            'new_password' => [
                'required',
                'confirmed',
                'max:150',
                PasswordRules::min(8)->letters()->mixedCase()->numbers()->symbols()->uncompromised()
            ],
        ]);

        $user = $request->user();
        // Verificar si la contraseña actual es correcta
        if (!Hash::check($request->current_password, $user->password)) {
           return response()->json([
            'message' => 'Current password is wrong'
           ], 401);
        }
$user->password = bcrypt($request->new_password);
if($user->save()){
    return response()->json([
        'message' => 'Password changed succesfully'
    ], 200);
} else {
    return response()->json([
        'message' => 'Some errors ocurred, please try again'
    ], 500);
}
    
    }






    public function forgot(Hasher $hasher, ForgotPasswordRequest $request): JsonResponse
    {
        // Buscar al usuario por su correo electrónico
        $user = User::where('email', $request->input('email'))->first();
    
        // Verificar si el usuario no existe o si no se proporcionó un correo electrónico
        if (!$user || !$user->email) {
            return response()->json(['error' => 'Incorrect email address provided'], 404);
        }
    
        // Generar un token de restablecimiento de contraseña
        $resetPasswordToken = str_pad(random_int(1, 9999), 4, '0', STR_PAD_LEFT);
    
        // Verificar si ya existe una entrada de restablecimiento de contraseña para este usuario
        $userPassReset = PasswordReset::where('email', $user->email)->first();
    
        // Crear una nueva entrada de restablecimiento de contraseña si no existe
        if (!$userPassReset) {
            PasswordReset::create([
                'email' => $user->email,
                'token' => $resetPasswordToken
            ]);
        } else {
            // Actualizar la entrada de restablecimiento de contraseña existente con el nuevo token
            $userPassReset->update([
                'token' => $resetPasswordToken
            ]);
        }
    
        // Notificar al usuario sobre el restablecimiento de contraseña
        $user->notify(new PasswordResetNotification($user, $resetPasswordToken));
    
        // Retornar una respuesta JSON
        return response()->json(['message' => 'A code has been sent to your email address']);
    }
    
    public function reset(ResetPasswordRequest $request): JsonResponse
{
    $attributes = $request->validated();

    // Check if the "email" key exists in the $attributes array
    if (!isset($attributes['email'])) {
        return response()->json(['error' => 'Email address not provided'], 400);
    }

    $user = User::where('email', $attributes['email'])->first();

    if (!$user) {
        return response()->json(['error' => 'Incorrect email address provided'], 404);
    }

    $resetRequest = PasswordReset::where('email', $user->email)->first();
    if (!$resetRequest || $resetRequest->token != $request->token) {
        return response()->json(['error' => 'Token mismatch'], 400);
    }

    $user->fill([
        'password' => Hash::make($attributes['password']),
    ]);
    $user->save();
    $user->tokens()->delete();
    $token = $user->createToken('authToken')->plainTextToken;
    $loginResponse = [
        'user' => UserResource::make($user),
        'token' => $token
    ];
    return response()->json($loginResponse, 201);
}





}