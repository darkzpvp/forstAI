<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Suscripciones;
use Illuminate\Http\Request;
use App\Models\User;
class SuscripcionesController extends Controller
{
    public function comprar(Request $request)
    {
        // Obtener la suscripción del usuario autenticado
        $suscripcion = Suscripciones::where('user_id', Auth::id())->first();

        // Validar la solicitud
  
        // Obtener la ID de la suscripción del request
        $id_suscripcion = $request->input('id_suscripcion');

        // Obtener el tipo de suscripción y definir prompts y precio según el tipo
        list($tipo_suscripcion, $prompts_disponibles, $precio) = $this->obtenerTipoSuscripcion($id_suscripcion);

        // Actualizar la tabla de suscripciones del usuario si existe
        if ($suscripcion) {
            $suscripcion->update([
                'tipo' => $tipo_suscripcion,
                'prompts_disponibles' => $prompts_disponibles,
                'precio' => $precio
            ]);
        } else {
            // Si no existe una suscripción para este usuario, crear una nueva
            Suscripciones::create([
                'user_id' => Auth::id(),
                'tipo' => $tipo_suscripcion,
                'prompts_disponibles' => $prompts_disponibles,
                'precio' => $precio
            ]);
        }

        // Respuesta de éxito
        return response()->json(['message' => 'Suscripción comprada con éxito'], 200);
    }

    // Función para obtener el tipo de suscripción y sus detalles según la ID recibida
    private function obtenerTipoSuscripcion($id)
    {
        switch ($id) {
            case "1":
                return ['basico', 10, 9];
            case "2":
                return ['estandar', 25, 19];
            case "3":
                return ['premium', 9999, 25];
            default:
                return [null, null, null];
        }
    }
    public function eliminar() {
        // Verificar si el usuario está autenticado
        if (Auth::check()) {
            // Encontrar las suscripciones del usuario actual
            $suscripciones = Suscripciones::where('user_id', Auth::id())->first();
    
            // Verificar si se encontraron suscripciones
            if ($suscripciones) {
                // Eliminar las suscripciones encontradas
                $suscripciones->delete();
                return "Suscripciones eliminadas correctamente";
            } else {
                return "No se encontraron suscripciones para este usuario";
            }
        } else {
            return "El usuario no está autenticado";
        }
    }
    public function getAll()
    {
        $suscripciones = Suscripciones::with('user')->get(); // Cargar la relación User
        
        if ($suscripciones->isEmpty()) {
            // No hay suscripciones, devuelve el valor de free_prompts del usuario
            $freePrompts = User::first()->free_prompts;
            return response()->json(['free_prompts' => $freePrompts], 200);
        }
    
        $datos = $suscripciones->map(function ($suscripcion) {
            $totalPrompts = $suscripcion->user->free_prompts + $suscripcion->prompts_disponibles;
            return [
                'prompts' => $totalPrompts,
                'tipo' => $suscripcion->tipo,
                'precio' => $suscripcion->precio,
                'fecha_expiracion' => $suscripcion->fecha_expiracion,
                'comprado' => $suscripcion->created_at
                // Agrega aquí cualquier otro campo que desees incluir de la tabla suscripciones
            ];
        });
    
        return response()->json($datos);
    }
}
