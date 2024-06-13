<?php

namespace Tests\Feature;


use Tests\TestCase;
use App\Notifications\RecibirEmailNotificacion;
use Illuminate\Notifications\AnonymousNotifiable;
use Illuminate\Support\Facades\Notification;

class EnviarEmailTest extends TestCase
{
    public function test_recibir_email_exitoso()
    {
        // Mock de las notificaciones
        Notification::fake();

        // Datos de prueba para la solicitud
        $emailData = [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'message' => 'Este es un mensaje de prueba',
        ];

        // Hacer una petición POST al método recibirEmail
        $response = $this->postJson('/api/recibir-email', $emailData);

        // Verificar que la respuesta es correcta
        $response->assertStatus(200);
        $response->assertJson(['status' => '¡Correo enviado con éxito!']);

        // Verificar que se envió la notificación
        Notification::assertSentTo(
            new AnonymousNotifiable,
            RecibirEmailNotificacion::class,
            function ($notification, $channels, $notifiable) use ($emailData) {
                return $notifiable->routes['mail'] === config('mail.from.address') &&
                       $notification->emailData === $emailData;
            }
        );
    }
}
