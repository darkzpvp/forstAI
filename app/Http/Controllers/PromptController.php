<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
class PromptController extends Controller
{
    public function enviarFormulario(Request $request)
    {
        // Obtener el usuario autenticado usando Laravel Sanctum
        $user = auth()->user();

        // Verificar si el usuario existe y tiene promps disponibles
        if ($user && $user->free_prompts > 0) {
            // Decrementar el número de free_prompts
            $user->free_prompts -= 1;
            $user->save();

        } else {
            return response([
                'errors' => ['Suscríbete para seguir lanzando prompts.']
            ], 422);
        }
    }

  public function getPrompts(Request $request)
{
    // Obtener el usuario autenticado usando Laravel Sanctum
    $user = auth()->user();

    // Verificar si el usuario está autenticado
    if (!$user) {
        return response([
            'errors' => ['Usuario no autenticado']
        ], 401);
    }

    // Obtener los prompts asociados al usuario
    $prompts = $user->free_prompts;

    return response()->json(['prompts' => $prompts,  'errors' => ['¡No tienes prompts disponibles!']]);
}
}