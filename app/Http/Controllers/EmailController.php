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
     


        $emailData = $data;
        Notification::route('mail', 'your-email@example.com')->notify(new RecibirEmailNotificacion($emailData));

        return response()->json([
            'status' => '¡Correo enviado con éxito!',
        ]);
    }
}
