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
use App\Models\InformacionPersonal;
use App\Models\Prompt;
use Carbon\Carbon;

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
    public function registro(RegistroRequest $request)
    {
        try {
            // Crear un nuevo usuario
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => bcrypt($request->input('password'))
            ]);
            
            // Obtener la dirección IP pública del usuario
            $publicIpResponse = Http::get('https://api.ipify.org?format=json');
            $publicIpData = $publicIpResponse->json();
            $publicIpAddress = $publicIpData['ip'];
            
            // Guardar la dirección IP del usuario
            $user->ip_address = $publicIpAddress;
            $user->save();
            
            // Retornar el token de autenticación y la información del usuario
            return [
                'token' => $user->createToken('token')->plainTextToken,
                'user' => $user
            ];
        } catch (\Exception $e) {
            // Manejar cualquier error que ocurra durante el proceso de registro
            // Por ejemplo, registro fallido, error al obtener la dirección IP, etc.
            return response()->json(['error' => 'Error al registrar el usuario'], 500);
        }
    }
    
    public function login(LoginRequest $request)
    {
        try {
            // Validar la solicitud (la validación debería ocurrir dentro del objeto LoginRequest)
    
            // Intentar autenticar al usuario
            if (!Auth::attempt($request->only('email', 'password'))) {
                return response()->json(['incorrecto' => 'El email o la contraseña son incorrectos'], 422);
            }
    
            // Obtener al usuario autenticado
            $user = Auth::user();
    
            // Obtener la dirección IP pública del usuario
            $publicIpResponse = Http::get('https://api.ipify.org?format=json');
            $publicIpData = $publicIpResponse->json();
            $publicIpAddress = $publicIpData['ip'];
    
            // Verificar si la dirección IP ha cambiado y actualizarla si es necesario
            if ($user->ip_address !== $publicIpAddress) {
                $user->ip_address = $publicIpAddress;
                $user->save();
            }
    
            // Retornar el token de autenticación y la información del usuario
            return [
                'token' => $user->createToken('token')->plainTextToken,
                'user' => $user
            ];
        } catch (\Exception $e) {
            // Manejar cualquier error que ocurra durante el proceso de autenticación
            return response()->json(['error' => 'Error al iniciar sesión'], 500);
        }
    }

    //Forget password api method
    public function cambiarContraseña(ChangePasswordRequest $request)
{
    $user = $request->user();

    // Verificar si la contraseña actual es correcta
    if (!Hash::check($request->current_password, $user->password)) {
        return response()->json([
            'incorrecto' => ['La contraseña actual es incorrecta']
        ], 401);
    }

    // Verificar si la nueva contraseña está vacía
    if (empty($request->new_password)) {
        return response()->json([
            'error' => 'La nueva contraseña no puede estar vacía'
        ], 422);
    }

    // Cambiar la contraseña del usuario
    $user->password = bcrypt($request->new_password);

    if ($user->save()) {
        return response()->json([
            'message' => '¡Contraseña cambiada correctamente!'
        ], 200);
    } else {
        return response()->json([
            'error' => 'Error al cambiar la contraseña'
        ], 500);
    }
}





public function olvide(Hasher $hasher, Request $request): JsonResponse
{
    // Validar el request
    $request->validate([
        'email' => 'required|email',
    ], [
        'email.required' => 'El email es obligatorio',
        'email.email' => 'Por favor, proporciona un email válido',
    ]);

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



    public function comprobarToken(Request $request): JsonResponse
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

    // Obtener la suscripción del usuario
    $suscripcion = Suscripciones::where('user_id', $usuario->id)->first();

    // Calcular totalPrompts
    $totalPrompts = $suscripcion ? ($usuario->free_prompts + ($suscripcion->prompts_disponibles ?? 0)) : $usuario->free_prompts;

    // Obtener los detalles de facturación del usuario
    $detalles_facturacion = InformacionPersonal::where('user_id', $usuario->id)->first();

    // Obtener los prompts del usuario
    $prompts = Prompt::where('user_id', $usuario->id)->get();

    return response()->json([
        'informacion_personal' => [
            'id' => $usuario->id,
            'nombre' => $usuario->name,
            'imagen' => $usuario->imagen,
            'estado' => $usuario->estado,
            'email' => $usuario->email,
            'rol' => $usuario->rol,
            'ip_address' => $usuario->ip_address,
            'ultima_sesion' => $usuario->ultima_sesion,
            'total_prompts' => $totalPrompts,
        ],
        'suscripcion' => $suscripcion ? [
            'tipo' => $suscripcion->tipo,
            'fecha_expiracion' => $suscripcion->fecha_expiracion,
        ] : null,
        'detalles_facturacion' => $detalles_facturacion ? [
            'nombre' => $detalles_facturacion->nombre,
            'apellidos' => $detalles_facturacion->apellidos,
            'direccion' => $detalles_facturacion->direccion,
            'cp' => $detalles_facturacion->cp,
            'poblacion' => $detalles_facturacion->poblacion,
            'provincia' => $detalles_facturacion->provincia,
            'numero_telefono' => $detalles_facturacion->numero_telefono,
            'pais' => $detalles_facturacion->pais,
            'nif_nie' => $detalles_facturacion->nif_nie,
        ] : null,
        'prompts' => $prompts->isEmpty() ? null : $prompts->map(function($prompt) {
            return [
                'texto' => $prompt->texto,
                'created_at' => $prompt->created_at
            ];
        })
    ]);
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
public function usuariosUltimaSemana()
{
    // Fecha y hora de hace 7 días (semana actual)
    $startOfWeek = Carbon::now()->startOfWeek();
    $endOfWeek = Carbon::now()->endOfWeek();

    // Fecha y hora de hace 14 días a 7 días atrás (semana pasada)
    $startOfLastWeek = Carbon::now()->subWeek()->startOfWeek();
    $endOfLastWeek = Carbon::now()->subWeek()->endOfWeek();

    // Obtener el número de usuarios registrados en la semana actual
    $currentWeekUserCount = User::whereBetween('created_at', [$startOfWeek, $endOfWeek])->count();

    // Obtener el número de usuarios registrados en la semana pasada
    $lastWeekUserCount = User::whereBetween('created_at', [$startOfLastWeek, $endOfLastWeek])->count();

    // Calcular el porcentaje de diferencia
    if ($lastWeekUserCount == 0) {
        $percentageDifference = $currentWeekUserCount > 0 ? 100 : 0;
    } else {
        $percentageDifference = (($currentWeekUserCount - $lastWeekUserCount) / $lastWeekUserCount) * 100;
    }

    return response()->json([
        'current_week_count' => $currentWeekUserCount,
        'last_week_count' => $lastWeekUserCount,
        'percentage_difference' => $percentageDifference,
    ]);
}


public function cambiarEstadoUsuario(Request $request)
{
    // Verificar que la solicitud sea de tipo POST
    if ($request->isMethod('post')) {
        // Obtener el usuario autenticado
        $user = auth()->user();
        
        // Validar el valor del estado recibido
        $request->validate([
            'estado' => 'required|in:Conectado,Desconectado',
        ]);
        
        // Actualizar el estado del usuario autenticado
        $user->estado = $request->input('estado');
        
        // Guardar los cambios en la base de datos
        if ($user->save()) {
            // Retornar una respuesta de éxito
            return response()->json(['message' => 'Estado actualizado correctamente.'], 200);
        } else {
            // Retornar una respuesta de error
            return response()->json(['message' => 'Error al actualizar el estado.'], 500);
        }
    } else {
        // Retornar una respuesta de método no permitido
        return response()->json(['message' => 'Método no permitido.'], 405);
    }
}

public function ultimaSesionUsuario(Request $request)
{
    // Verificar que la solicitud sea de tipo POST
    if ($request->isMethod('post')) {
        // Obtener el usuario autenticado
        $user = auth()->user();
        
        // Validar el valor del estado recibido
        $request->validate([
            'ultima_sesion' => 'required',
        ]);
        
        // Actualizar el estado del usuario autenticado
        $user->ultima_sesion = $request->input('ultima_sesion');
        
        // Guardar los cambios en la base de datos
        if ($user->save()) {
            // Retornar una respuesta de éxito
            return response()->json(['message' => 'Sesión actualizado correctamente.'], 200);
        } else {
            // Retornar una respuesta de error
            return response()->json(['message' => 'Error al actualizar la sesión.'], 500);
        }
    } else {
        // Retornar una respuesta de método no permitido
        return response()->json(['message' => 'Método no permitido.'], 405);
    }
}


}