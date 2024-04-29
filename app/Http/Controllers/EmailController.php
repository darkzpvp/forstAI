<?php

namespace App\Http\Controllers;
use App\Notifications\RecibirEmailNotificacion;
use Illuminate\Support\Facades\Notification;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    public function receiveEmail(Request $request)
{
    // Validar la solicitud
    $validatedData = $request->validate([
        'name' => 'required|string',
        'email' => 'required|email',
        'message' => 'required|string',
    ]);

    // Procesar el correo electrónico recibido

    // Enviar notificación por correo electrónico
    $emailData = $validatedData;
    Notification::route('mail', 'your-email@example.com')->notify(new RecibirEmailNotificacion($emailData));

    return response()->json([
        'status' => 'success',
    ]);
}
}