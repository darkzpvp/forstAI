<?php

namespace App\Http\Controllers;

use App\Notifications\RecibirEmailNotificacion;
use Illuminate\Support\Facades\Notification;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\EmailRequest;
class EmailController extends Controller
{
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
