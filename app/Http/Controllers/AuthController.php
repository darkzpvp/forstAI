<?php

namespace App\Http\Controllers;

use App\Http\Requests\EliminarCuentaRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistroRequest;
use App\Http\Requests\ChangePasswordRequest;
use App\Notifications\PasswordResetNotification;
use App\Http\Requests\ResetPasswordRequest;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Suscripciones;
use App\Models\PasswordReset;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\SuscripcionesController;

class AuthController extends Controller
{
    protected $suscripcionesController;
    public function __construct(SuscripcionesController $suscripcionesController)
    {
        $this->suscripcionesController = $suscripcionesController;
    }
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
        $publicIpResponse = Http::get('https://api.ipify.org?format=json');
        $publicIpData = $publicIpResponse->json();
        $publicIpAddress = $publicIpData['ip'];

        // Guardar la dirección IP del usuario
        $user->ip_address = $publicIpAddress;
        $user->save();
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
        // $response = [
        //     'message' => 'Se ha enviado un mensaje de confirmación a tu correo electrónico'
        // ];

        // return $response;
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
        $publicIpResponse = Http::get('https://api.ipify.org?format=json');
        $publicIpData = $publicIpResponse->json();
        $publicIpAddress = $publicIpData['ip'];

        // Verificar si la dirección IP ya está almacenada
        if ($user->ip_address !== $publicIpAddress) {
            // Actualizar la dirección IP del usuario
            $user->ip_address = $publicIpAddress;
            $user->save();
        }
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }

    //Forget password api method
    public function changePassword(ChangePasswordRequest $request)
    {
        $validatedData = $request->validated();

        $user = $request->user();

        // Verificar si la contraseña actual es correcta
        if (!Hash::check($validatedData['current_password'], $user->password)) {
            return response()->json([
                'errors' => ['¡La contraseña actual es incorrecta!']
            ], 401);
        }

        // Verificar si la nueva contraseña está vacía


        $user->password = bcrypt($validatedData['new_password']);

        if ($user->save()) {
            return response()->json([
                'message' => '¡Contraseña cambiada correctamente!'
            ], 200);
        }
    }





    public function forgot(Hasher $hasher, Request $request): JsonResponse
    {
        // Definir mensajes personalizados
        $messages = [
            'email.required' => 'El email es obligatorio',
            'email.email' => 'Por favor, proporciona un email válido',
        ];

        // Validar el request
        $request->validate([
            'email' => 'required|email',
        ], $messages);

        // Buscar al usuario por su correo electrónico
        $user = User::where('email', $request->input('email'))->first();

        // Verificar si el usuario no existe
        if (!$user) {
            return response()->json(['errors' => 'Usuario no encontrado'], 404);
        }

        // Generar un token de restablecimiento de contraseña
        $resetPasswordToken = bin2hex(random_bytes(16));

        // Codificar el token como una cadena base64 segura para URL
        $resetPasswordToken = rtrim(strtr(base64_encode($resetPasswordToken), '+/', '-_'), '=');

        // Establecer la fecha de vencimiento del token (1 día)
        $expiresAt = now()->addDay();

        // Crear o actualizar la entrada de restablecimiento de contraseña para el usuario
        PasswordReset::updateOrCreate(
            ['email' => $user->email],
            ['token' => $resetPasswordToken, 'expires_at' => $expiresAt]
        );

        // Notificar al usuario sobre el restablecimiento de contraseña
        $user->notify(new PasswordResetNotification($user, $resetPasswordToken));

        // Retornar una respuesta JSON
        return response()->json(['status' => 'Un código se ha enviado a tu correo electrónico']);
    }

    public function reset(ResetPasswordRequest $request): JsonResponse
    {
        $token = $request->query('token'); // Obtener el token desde la URL

        if (!$token) {
            return response()->json(['errors' => ['Token not provided']], 400);
        }

        // Buscar la solicitud de restablecimiento de contraseña
        $resetRequest = PasswordReset::where('token', $token)->first();

        if (!$resetRequest) {
            return response()->json(['errors' => ['tokens' => ['Token inválido']]], 400);
        }

        // Obtener el usuario asociado al token
        $user = User::where('email', $resetRequest->email)->first();

        if (!$user) {
            return response()->json(['errors' => ['User not found']], 404);
        }

        // Obtener los datos validados
        $data = $request->validated();

        // Actualizar la contraseña del usuario
        $user->fill([
            'password' => Hash::make($data['password']),
        ]);
        $user->save();

        // Eliminar la solicitud de restablecimiento de contraseña
        $resetRequest->delete();

        // Eliminar todos los tokens de acceso del usuario
        $user->tokens()->delete();

        // Crear un nuevo token de acceso
        $token = $user->createToken('authToken')->plainTextToken;

        $response = [
            'status' => 'Contraseña cambiada correctamente'
        ];

        return response()->json($response, 201);
    }



    public function checkToken(Request $request): JsonResponse
    {
        // Obtener el token enviado por el cliente
        $token = $request->query('token');

        // Verificar si el token existe en la base de datos
        $passwordReset = PasswordReset::where('token', $token)->first();

        // Si el token existe, devolver un código de estado 200
        if ($passwordReset) {
            return response()->json(['valido' => 'Token válido'], 200);
        } else {
            // Si el token no existe, devolver un código de estado 404
            return response()->json(['errors' => ['tokens' => ['Token inválido']]], 404);

        }
    }

    public function eliminarCuenta(EliminarCuentaRequest $request): JsonResponse
    {
        $request->validated();


        $user = $request->user();
        // Verificar si la contraseña actual es correcta
        if (Hash::check($request->current_password, $user->password)) {
            // La contraseña coincide, eliminar la cuenta
            $user->delete(); // Esto eliminará el usuario de la base de datos
            return response()->json([
                'message' => 'La cuenta ha sido eliminada correctamente'
            ], 200);
        } else {
            // La contraseña no coincide
            return response()->json([
                'errors' => ['La contraseña actual es incorrecta']
            ], 401);
        }
    }


    
public function informacionUsuarioPanel(Request $request): JsonResponse
{
    // Obtener todos los usuarios
    $usuarios = User::all();

    // Mapear los datos para la respuesta
    $datos = $usuarios->map(function ($user) {
        // Obtener las suscripciones del usuario
        $suscripciones = Suscripciones::where('user_id', $user->id)->get();

        // Si no hay suscripciones, incluir un array con los datos del usuario y tipo null
        if ($suscripciones->isEmpty()) {
            return [
                [
                    'id' => $user->id,
                    'suscripcion' => null,
                    'imagen' => $user->imagen,
                    'estado' => $user->estado,
                    'nombre' => $user->name,
                    'email' => $user->email,
                    'rol' => $user->rol,
                    'free_prompts' => $user->free_prompts

                ]
            ];
        }

        // Si hay suscripciones, mapear cada una
        return $suscripciones->map(function ($suscripcion) use ($user) {
            return [
                'id' => $user->id,
                'suscripcion' => $suscripcion->tipo,
                'imagen' => $user->imagen,
                'estado' => $user->estado,
                'nombre' => $user->name,
                'email' => $user->email,
                'rol' => $user->rol,
                'free_prompts' => $user->free_prompts

            ];
        });
    })->flatten(1); // Aplanar el array resultante

    return response()->json($datos);
}
public function informacionUserId($id): JsonResponse
{
    // Obtener el usuario por su ID
    $usuario = User::findOrFail($id);

    // Obtener las suscripciones del usuario
    $suscripciones = Suscripciones::where('user_id', $usuario->id)->get();

    // Si no hay suscripciones, incluir un array con los datos del usuario y tipo null
    if ($suscripciones->isEmpty()) {
        $datos = [
            [
                'id' => $usuario->id,
                'suscripcion' => null,
                'imagen' => $usuario->imagen,
                'estado' => $usuario->estado,
                'nombre' => $usuario->name,
                'email' => $usuario->email,
                'rol' => $usuario->rol,
                'free_prompts' => $usuario->free_prompts
            ]
        ];
    } else {
        // Si hay suscripciones, mapear cada una
        $datos = $suscripciones->map(function ($suscripcion) use ($usuario) {
            return [
                'id' => $usuario->id,
                'suscripcion' => $suscripcion->tipo,
                'imagen' => $usuario->imagen,
                'estado' => $usuario->estado,
                'nombre' => $usuario->name,
                'email' => $usuario->email,
                'rol' => $usuario->rol,
                'free_prompts' => $usuario->free_prompts
            ];
        });
    }

    return response()->json($datos);
}
public function informacionUserIdActualizar($id, Request $request): JsonResponse {
    $usuario = User::findOrFail($id);

    // Verificar si hay datos en el request para actualizar el usuario
    if ($request->has('nombre')) {
        $usuario->name = $request->nombre;
    }

    if ($request->has('email')) {
        $usuario->email = $request->email;
    }

    if ($request->has('rol')) {
        $usuario->rol = $request->rol;
    }

    if ($request->has('estado')) {
        $usuario->estado = $request->estado;
    }

    if ($request->has('imagen')) {
        $usuario->imagen = $request->imagen;
    }

    if ($request->has('free_prompts')) {
        $usuario->free_prompts = $request->free_prompts;
    }

    // Verificar y actualizar la contraseña
    if ($request->has('password') && $request->has('password_repeat')) {
        $password = $request->input('password');
        $passwordRepeat = $request->input('password_repeat');

        if ($password === $passwordRepeat) {
            $usuario->password = bcrypt($password);
        } else {
            return response()->json(['error' => ['Las contraseñas no coinciden']], 400);
        }
    }

    // Verificar y actualizar la suscripción
    if ($request->has('tipo')) {
        $suscripcion = $request->input('tipo');

        // Buscar la suscripción existente del usuario
        $suscripcionUsuario = Suscripciones::where('user_id', $usuario->id)->first();

        // Si el tipo es "0", eliminar completamente la suscripción
        if ($suscripcion === "0") {
            if ($suscripcionUsuario) {
                $suscripcionUsuario->delete();
            }
        } else {
            // Si no existe una suscripción para este usuario, crear una nueva
            if (!$suscripcionUsuario) {
                // Obtener el tipo de suscripción y sus detalles según la ID recibida
                list($tipo_suscripcion, $prompts_disponibles, $precio) = (new SuscripcionesController)->obtenerTipoSuscripcion($suscripcion);            
                // Crear una nueva suscripción
                Suscripciones::create([
                    'user_id' => $usuario->id,
                    'tipo' => $tipo_suscripcion,
                    'prompts_disponibles' => $prompts_disponibles,
                    'precio' => $precio
                ]);
            } else {
                // Si la suscripción existe, actualizarla
                $suscripcionUsuario->tipo = $suscripcion;
                $suscripcionUsuario->save();
            }
        }
    }

    // Guardar los cambios en el usuario
    $usuario->save();

    // Construir la respuesta
    $datos = [
        'id' => $usuario->id,
        'suscripcion' => $suscripcionUsuario ? $suscripcionUsuario->tipo : null,
        'imagen' => $usuario->imagen,
        'estado' => $usuario->estado,
        'nombre' => $usuario->name,
        'email' => $usuario->email,
        'rol' => $usuario->rol,
        'free_prompts' => $usuario->free_prompts
    ];

    return response()->json($datos);
}
public function eliminarCuentasUsuarios(Request $request): JsonResponse
{
    $ids = $request->input('ids', []);

    if (!empty($ids)) {
        User::whereIn('id', $ids)->delete();
        return response()->json(['success' => true, 'message' => 'Usuarios eliminados correctamente'], 200);
    }

    return response()->json(['success' => false, 'message' => 'No se proporcionaron IDs de usuarios'], 400);
}


}