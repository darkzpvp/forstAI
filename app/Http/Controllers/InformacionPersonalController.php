<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InformacionPersonal;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class InformacionPersonalController extends Controller
{
    /**
     * Almacena la información personal en la base de datos.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validar los datos enviados por el cliente
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'numero_telefono' => 'required|string|max:20',
            'pais' => 'required|string|max:255',
            'poblacion' => 'required|string|max:255',
            'provincia' => 'required|string|max:255',
            'nif_nie' => 'required|string|max:20',
        ], [
            'required' => 'Todos los campos son obligatorios',
            '*.string' => 'El campo :attribute debe ser una cadena de texto.',
            '*.max' => 'El campo :attribute no debe superar los :max caracteres.',
        ]);
        
        $validator->stopOnFirstFailure();
        
        $validator->validate();
    
        // Buscar si ya existe información personal para el usuario actual
        $informacionPersonal = InformacionPersonal::where('user_id', Auth::id())->first();
    
        if ($informacionPersonal) {
            // Si la información personal ya existe, actualizar los datos
            $informacionPersonal->update([
                'nombre' => $request->input('nombre'),
                'apellidos' => $request->input('apellidos'),
                'numero_telefono' => $request->input('numero_telefono'),
                'pais' => $request->input('pais'),
                'poblacion' => $request->input('poblacion'),
                'provincia' => $request->input('provincia'),
                'nif_nie' => $request->input('nif_nie'),
            ]);
        } else {
            // Si la información personal no existe, crear un nuevo registro
            $informacionPersonal = new InformacionPersonal([
                'user_id' => Auth::id(),
                'nombre' => $request->input('nombre'),
                'apellidos' => $request->input('apellidos'),
                'numero_telefono' => $request->input('numero_telefono'),
                'pais' => $request->input('pais'),
                'poblacion' => $request->input('poblacion'),
                'provincia' => $request->input('provincia'),
                'nif_nie' => $request->input('nif_nie'),
            ]);
            $informacionPersonal->save();
        }
    
        // Devolver una respuesta con un código de estado 201 (Created) y los datos almacenados
        return response()->json(['message' => 'Información personal almacenada correctamente', 'data' => $informacionPersonal], 201);
    }
    public function show(Request $request)
{
    // Obtener la información personal del usuario actual
    $informacionPersonal = InformacionPersonal::where('user_id', Auth::id())->first();

    // Verificar si se encontró la información personal
    if (!$informacionPersonal) {
        return response()->json(['message' => 'No se encontró información personal para este usuario'], 404);
    }

    // Devolver una respuesta con los datos de la información personal
    return response()->json(['data' => $informacionPersonal], 200);
}
}
