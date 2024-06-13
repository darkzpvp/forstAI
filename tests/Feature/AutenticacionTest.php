<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Notification;
use App\Models\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\URL;
use Illuminate\Auth\Notifications\VerifyEmail;
class AutenticacionTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_registro()
    {
        $data = [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'Victor_1234',
            'password_confirmation' => 'Victor_1234',
        ];

        $response = $this->postJson('/api/registro', $data);
        $response->assertStatus(200);

        $this->assertDatabaseHas('users', [
            'email' => 'test@example.com',
        ]);

        $response->assertJsonStructure([
            'user' => [
                'id',
                'name',
                'email',
                'created_at',
                'updated_at',
            ],
            'token',
        ]);
    }
     public function test_user_login()
    {
        // Crear un usuario de ejemplo
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('Victor_1234'),
        ]);

        // Datos para la autenticación (login)
        $data = [
            'email' => 'test@example.com',
            'password' => 'Victor_1234',
        ];

        // Hacer una solicitud POST a la ruta de login
        $response = $this->postJson('/api/login', $data);

        // Verificar que la respuesta tenga un estado 200 (OK)
        $response->assertStatus(200);

        // Verificar la estructura de la respuesta JSON
        $response->assertJsonStructure([
            'user' => [
                'id',
                'name',
                'email',
                'created_at',
                'updated_at',
            ],
            'token',
        ]);

        // Opcional: Verificar que el usuario está autenticado en el sistema
        $this->assertAuthenticated();
    }



    public function test_olvide()
    {
        // Mock de las notificaciones
        Notification::fake();

        // Crear un usuario de prueba
        $user = User::factory()->create([
            'email' => 'test@example.com',
        ]);

        // Hacer una petición POST al método olvide
        $response = $this->postJson('/api/olvide', [
            'email' => 'test@example.com',
        ]);

        // Verificar que la respuesta es correcta
        $response->assertStatus(200);
        $response->assertJson(['status' => 'Un código se ha enviado a tu correo electrónico']);

        // Verificar que se creó un token de restablecimiento de contraseña
        $passwordReset = PasswordReset::where('email', 'test@example.com')->first();
        $this->assertNotNull($passwordReset);
        $this->assertTrue(now()->lt($passwordReset->expires_at));

        // Verificar que se envió la notificación
   
    }

    public function test_comprobar_token_valido()
    {
        // Crear un token de restablecimiento de contraseña en la base de datos
        $token = rtrim(strtr(base64_encode(bin2hex(random_bytes(16))), '+/', '-_'), '=');
        $passwordReset = PasswordReset::create([
            'email' => 'test@example.com',
            'token' => $token,
            'created_at' => now(),
        ]);

        // Hacer una petición GET al método comprobarToken con el token válido
        $response = $this->getJson('/api/comprobar-token?token=' . $token);

        // Verificar que la respuesta es correcta
        $response->assertStatus(200);
        $response->assertJson(['valido' => 'Token válido']);
    }




    public function test_resetear_contraseña()
    {
        // Crear un usuario de prueba y una solicitud de restablecimiento de contraseña
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => Hash::make('old_password'),
        ]);
    
        $resetRequest = PasswordReset::factory()->create([
            'email' => $user->email,
            'token' => 'valid_token',
        ]);
    
        // Generar un token de autenticación para el usuario (usando Laravel Sanctum, por ejemplo)
        $token = $user->createToken('test-token')->plainTextToken;
    
        // Datos para la solicitud de restablecimiento
        $data = [
            'token' => 'valid_token',
            'password' => 'Victor_1234',
            'password_confirmation' => 'Victor_1234',
        ];
    
        // Realizar la solicitud POST al método de reset, incluyendo el token de autenticación
        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->postJson('/api/reset', $data);
    
        // Verificar que la respuesta tenga el estado 400 (Bad Request)
        $response->assertStatus(400);
    
        // Verificar que la respuesta contenga el mensaje de error esperado
        $response->assertJson([
            'errors' => [
                'Token not provided',
            ],
        ]);
    
        // Verificar que la contraseña del usuario no se haya actualizado
        $this->assertTrue(Hash::check('old_password', $user->fresh()->password));
    
        // Verificar que la solicitud de restablecimiento aún está presente en la base de datos
        $this->assertDatabaseHas('password_resets', [
            'email' => $user->email,
            'token' => 'valid_token',
        ]);
    
        // Verificar que los tokens de acceso del usuario no se hayan eliminado
        $this->assertGreaterThan(0, $user->tokens()->count());
    }
    
    public function test_verificar_usuario()
    {
        Event::fake();
    
        $user = User::factory()->create(['email_verified_at' => null]);
    
        $verificationUrl = URL::temporarySignedRoute(
            'verification.verify',
            now()->addMinutes(60),
            [
                'id' => $user->id,
                'hash' => sha1($user->getEmailForVerification()),
            ]
        );
    
        // Realiza una solicitud GET al URL de verificación
        $response = $this->getJson($verificationUrl);
    
        $response->assertStatus(401);
    
        $response->assertJson([
            'message' => 'Unauthenticated.',
        ]);
    
    
    }
    public function test_enviar_email_verificacion()
    {
        Notification::fake(); // Para evitar que se envíen notificaciones reales

        // Creamos un usuario no verificado
        $user = User::factory()->create(['email_verified_at' => null]);

        // Simulamos la autenticación del usuario usando Sanctum
        $this->actingAs($user, 'sanctum');

        // Hacemos una solicitud POST a la ruta 'email-notificacion'
        $response = $this->postJson('/api/email-notificacion');

        // Verificamos que la respuesta tenga el formato correcto y el mensaje esperado
        $response->assertStatus(200)
                 ->assertJson(['status' => '¡Se ha enviado un enlace de verificación a tu correo electrónico!']);

        // Verificamos que se haya enviado la notificación de verificación por correo electrónico
        Notification::assertSentTo(
            $user,
            VerifyEmail::class
        );
    }
}




