<?php

namespace App\Http\Controllers;

use App\Notifications\RecibirEmailNotificacion;
use Illuminate\Support\Facades\Notification;
//TODO elimina el código innecesario
use App\Http\Requests\EmailRequest;

class EmailController extends Controller
{
    //TODO no eres consistente con los nombres de las funciones, unas las tienes en inglés otras en español y otras haces mezcla de idiomas.
    //Parece una tontería, pero el día de mañana cuando tengas que revisar el código, haber sido consistente te va a ahorrar tiempo a la hora de encontrar errores.
    public function receiveEmail(EmailRequest $request)
    {
        $data = $request->validated();

        try {
            $emailData = $data;
            Notification::route('mail', config('mail.from.address'))->notify(new RecibirEmailNotificacion($emailData));
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error al enviar el correo: ' . $e->getMessage(),
            ], 500);
        }

        return response()->json([
            'status' => '¡Correo enviado con éxito!',
        ]);
    }
}
