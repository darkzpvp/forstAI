<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Suscripciones;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;

class SuscripcionesController extends Controller
{
    public function comprar(Request $request)
{
    // Obtener la suscripción del usuario autenticado
    $suscripcion = Suscripciones::where('user_id', Auth::id())->first();

    // Validar la solicitud

    // Obtener la ID de la suscripción del request
    $id_suscripcion = $request->input('id_suscripcion');

    // Si la ID de suscripción es 0, eliminar la suscripción existente (si la hay)
    if ($id_suscripcion === "0") {
        // Eliminar la suscripción existente (si la hay)
        if ($suscripcion) {
            $suscripcion->delete();
        }
    }

    // Obtener el tipo de suscripción y definir prompts y precio según el tipo
    list($tipo_suscripcion, $prompts_disponibles, $precio) = $this->obtenerTipoSuscripcion($id_suscripcion);

    // Crear o actualizar la suscripción del usuario
    if ($suscripcion) {
        // Si existe una suscripción, actualizarla
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
    public function obtenerTipoSuscripcion($id)
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
        // Obtener la suscripción del usuario autenticado
        $suscripcion = Suscripciones::where('user_id', Auth::id())->first();
        
        if (is_null($suscripcion)) {
            // No hay suscripción, devuelve el valor de free_prompts del usuario autenticado
            $user = Auth::user();
            return response()->json(['free_prompts' => $user->free_prompts], 200);
        }
    
        // Construir los datos de la suscripción
        $totalPrompts = $suscripcion->user->free_prompts + $suscripcion->prompts_disponibles;
        $datos = [
            'prompts' => $totalPrompts,
            'tipo' => $suscripcion->tipo,
            'precio' => $suscripcion->precio,
            'fecha_expiracion' => $suscripcion->fecha_expiracion,
            'comprado' => $suscripcion->created_at
            // Agrega aquí cualquier otro campo que desees incluir de la tabla suscripciones
        ];
        
        return response()->json($datos);
    }
    public function getCosteTotalUltimaSemana()
    {
        $startOfLastWeek = Carbon::now()->subWeek()->startOfWeek();
        $endOfLastWeek = Carbon::now()->subWeek()->endOfWeek();
    
        // Fecha y hora de inicio de la semana actual
        $startOfCurrentWeek = Carbon::now()->startOfWeek();
    
        // Obtener el coste total de suscripciones de la semana pasada
        $totalCosteLastWeek = Suscripciones::whereBetween('created_at', [$startOfLastWeek, $endOfLastWeek])->sum('precio');
    
        // Obtener el coste total de suscripciones de la semana actual
        $totalCosteCurrentWeek = Suscripciones::where('created_at', '>=', $startOfCurrentWeek)->sum('precio');
    
        // Calcular el porcentaje de diferencia
        if ($totalCosteLastWeek == 0) {
            $percentageDifference = $totalCosteCurrentWeek > 0 ? 100 : 0;
        } else {
            $percentageDifference = (($totalCosteCurrentWeek - $totalCosteLastWeek) / $totalCosteLastWeek) * 100;
        }
    
        return response()->json([
            'total_coste_semana_pasada' => $totalCosteLastWeek,
            'total_coste_semana_actual' => $totalCosteCurrentWeek,
            'percentage_difference' => $percentageDifference,
        ], 200);
    }
    public function getCosteTotal()
{
    // Sumar los precios de todas las suscripciones
    $totalCoste = Suscripciones::sum('precio');

    return response()->json(['total_coste' => $totalCoste], 200);
}
}
