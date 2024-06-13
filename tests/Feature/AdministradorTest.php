<?php
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Laravel\Sanctum\Sanctum;
use App\Models\Suscripciones;
use App\Models\InformacionPersonal;

class AdministradorTest extends TestCase
{
    use RefreshDatabase;

 
    public function test_suscripcion_beneficio()
{
    // Crear un usuario autenticado y verificado utilizando Sanctum
    $user = User::factory()->create([
        'email_verified_at' => now(),
        'rol' => 1,
    ]);
    
    // Generar un token para el usuario
    $token = $user->createToken('test-token')->plainTextToken;
    
    // Simular la autenticación con Sanctum
    Sanctum::actingAs($user, ['*']);
    
    // Hacer la solicitud GET al endpoint de obtención de costes
    $response = $this->getJson('/api/suscripcion/beneficio', [
        'Authorization' => 'Bearer ' . $token,
    ]);
    
    // Verificar que la solicitud GET fue exitosa
    $response->assertOk();
    
    // Verificar la estructura y datos de la respuesta JSON
    $response->assertJsonStructure([
        'total_coste_semana_pasada',
        'total_coste_semana_actual',
        'percentage_difference',
    ]);
}
public function test_ingresos_totales()
{
    // Crear un usuario autenticado y verificado utilizando Sanctum
    $user = User::factory()->create([
        'email_verified_at' => now(),
        'rol' => 1,
    ]);
    
    // Generar un token para el usuario
    $token = $user->createToken('test-token')->plainTextToken;
    
    // Simular la autenticación con Sanctum
    Sanctum::actingAs($user, ['*']);
    
    // Hacer la solicitud GET al endpoint de obtención del total de costes
    $response = $this->getJson('/api/suscripcion/total', [
        'Authorization' => 'Bearer ' . $token,
    ]);
    
    // Verificar que la solicitud GET fue exitosa
    $response->assertOk();
    
    // Verificar la estructura y datos de la respuesta JSON
    $response->assertJsonStructure([
        'total_coste',
    ]);

    // Verificar que el total de coste devuelto es igual al total de la base de datos
    $totalCoste = Suscripciones::sum('precio');
    $response->assertJson([
        'total_coste' => $totalCoste,
    ]);
}
public function test_usuario_informacion()
{
    // Crear un usuario autenticado y verificado utilizando Sanctum
    $user = User::factory()->create([
        'email_verified_at' => now(),
        'rol' => 1, // Rol de administrador
    ]);
    
    // Generar un token para el usuario
    $token = $user->createToken('test-token')->plainTextToken;
    
    // Simular la autenticación con Sanctum
    Sanctum::actingAs($user, ['*']);
    
    // Hacer la solicitud GET al endpoint de obtención de información de usuarios
    $response = $this->getJson('/api/ver-informacion-usuario', [
        'Authorization' => 'Bearer ' . $token,
    ]);
    
    // Verificar que la solicitud GET fue exitosa
    $response->assertOk();
    
    // Verificar la estructura y datos de la respuesta JSON
    $response->assertJsonStructure([
        '*' => [
            'id',
            'suscripcion',
            'imagen',
            'estado',
            'nombre',
            'email',
            'rol',
            'free_prompts',
        ],
    ]);

    // Obtener todos los usuarios desde la base de datos
    $usuarios = User::all();

    // Asegurar que la cantidad de usuarios en la respuesta coincida con los de la base de datos
    $this->assertCount($usuarios->count(), $response->json());

    // Verificar cada usuario y sus datos
    foreach ($usuarios as $usuario) {
        // Verificar que el usuario esté presente en la respuesta
        $this->assertTrue(collect($response->json())->contains(function ($usuarioResponse) use ($usuario) {
            return $usuarioResponse['id'] === $usuario->id;
        }));

        // Obtener suscripciones del usuario
        $suscripciones = Suscripciones::where('user_id', $usuario->id)->get();

        // Verificar suscripciones del usuario si las tiene
        foreach ($suscripciones as $suscripcion) {
            $this->assertTrue(collect($response->json())->contains(function ($usuarioResponse) use ($usuario, $suscripcion) {
                return $usuarioResponse['id'] === $usuario->id && $usuarioResponse['suscripcion'] === $suscripcion->tipo;
            }));
        }
    }
}

public function test_usuario_informacion_id()
{
    // Crear un usuario autenticado y verificado utilizando Sanctum
    $user = User::factory()->create([
        'email_verified_at' => now(),
        'rol' => 1, // Rol de administrador
    ]);

    // Generar un token para el usuario
    $token = $user->createToken('test-token')->plainTextToken;

    // Simular la autenticación con Sanctum
    Sanctum::actingAs($user, ['*']);

    // Crear un usuario de ejemplo y suscripción asociada
    $usuario = User::factory()->create([
        'name' => 'Felipe Kuphal',
        'estado' => 'Desconectado',
        'email' => 'spurdy@example.net',
        'rol' => 0,
    ]);

    Suscripciones::create([
        'user_id' => $usuario->id,
        'tipo' => 'basico',
        'prompts_disponibles' => 10,
        'precio' => 29.99,
        'fecha_expiracion' => now()->addDays(30), // Ejemplo: expiración en 30 días
    ]);

    InformacionPersonal::create([
        'user_id' => $usuario->id,
        'nombre' => 'Nombre Ejemplo',
        'apellidos' => 'Apellidos Ejemplo',
        'direccion' => 'Calle Ejemplo, 123',
        'cp' => '12345',
        'poblacion' => 'Población Ejemplo',
        'provincia' => 'Provincia Ejemplo',
        'numero_telefono' => '123456789',
        'pais' => 'País Ejemplo',
        'nif_nie' => '12345678X',
    ]);

    // Hacer la solicitud GET al endpoint de obtención de información de usuario por ID
    $response = $this->getJson('/api/informacion-usuario-panel/' . $usuario->id, [
        'Authorization' => 'Bearer ' . $token,
    ]);

    // Verificar que la solicitud GET fue exitosa
    $response->assertOk();

    // Definir el JSON esperado
    $expectedJson = [
        'informacion_personal' => [
            'id' => $usuario->id,
            'nombre' => 'Felipe Kuphal',
            'imagen' => null,
            'estado' => 'Desconectado',
            'email' => 'spurdy@example.net',
            'rol' => 0,
            'ip_address' => null,
            'ultima_sesion' => null,
            'total_prompts' => 20,
        ],
        'suscripcion' => [
            'tipo' => 'basico',
        ],
        'detalles_facturacion' => [
            'nombre' => 'Nombre Ejemplo',
            'apellidos' => 'Apellidos Ejemplo',
            'direccion' => 'Calle Ejemplo, 123',
            'cp' => '12345',
            'poblacion' => 'Población Ejemplo',
            'provincia' => 'Provincia Ejemplo',
            'numero_telefono' => '123456789',
            'pais' => 'País Ejemplo',
            'nif_nie' => '12345678X',
        ],
    ];

    // Verificar la estructura y datos de la respuesta JSON
    $response->assertJson($expectedJson);
}


public function test_actualizar_informacion_usuario_por_id()
{
    // Crear un usuario de ejemplo en la base de datos
    $usuario = User::factory()->create([
        'name' => 'Usuario de Prueba',
        'email' => 'prueba@example.com',
        'email_verified_at' => now(), // Establecer como verificado
        'rol' => 1, // Asignar un rol que tenga permisos para actualizar
        'estado' => 'Conectado',
        'imagen' => null,
        'free_prompts' => 5, // Ejemplo de prompts gratuitos
    ]);

    // Datos que se enviarán en la solicitud PUT
    $requestData = [
        'nombre' => 'Usuario Actualizado',
        'email' => 'nuevo_email@example.com',
        'email_verified_at' => now(), // Establecer como verificado
        'rol' => 2, // Nuevo rol
        'estado' => 'Desconectado',
        'free_prompts' => 10,
        'tipo' => '1', // Tipo de suscripción (opcional en tu lógica)
    ];

    // Autenticar el usuario y obtener el token
    Sanctum::actingAs($usuario, ['update']); // Simular autenticación con Sanctum

    // Simular una solicitud HTTP PUT al endpoint de actualización
    $response = $this->putJson("/api/informacion-usuario-panel/" . $usuario->id, $requestData);

    // Verificar que la solicitud haya sido exitosa (código 200)
    $response->assertOk();

    // Refrescar el modelo del usuario desde la base de datos
    $usuario->refresh();

    // Verificar que los datos del usuario se hayan actualizado correctamente
    $this->assertEquals('Usuario Actualizado', $usuario->name);
    $this->assertEquals('nuevo_email@example.com', $usuario->email);
    $this->assertEquals(2, $usuario->rol);
    $this->assertEquals('Desconectado', $usuario->estado);
    $this->assertEquals(10, $usuario->free_prompts);

    // Verificar la respuesta JSON devuelta por el endpoint
    $response->assertJson([
        'id' => $usuario->id,
        'nombre' => 'Usuario Actualizado',
        'email' => 'nuevo_email@example.com',
        'rol' => 2,
        'estado' => 'Desconectado',
        'free_prompts' => 10,
    ]);
}
public function test_eliminar_cuentas_usuarios()
{
    // Crear un usuario administrador de prueba en la base de datos
    $usuarioAdmin = User::factory()->create([
        'rol' => 1,
        'email_verified_at' => now(),
    ]);

    // Crear usuarios de prueba en la base de datos
    $usuarios = User::factory()->count(3)->create();

    // Obtener los IDs de los usuarios creados
    $ids = $usuarios->pluck('id')->toArray();

    // Autenticar el usuario administrador y obtener el token
    $token = $usuarioAdmin->createToken('test-token')->plainTextToken;

    // Caso 1: Probar eliminación con IDs válidos
    $response = $this->withHeaders([
        'Authorization' => 'Bearer ' . $token,
    ])->deleteJson('/api/eliminar-cuenta-usuario', ['ids' => $ids]);

    // Verificar que la solicitud haya sido exitosa (código 200)
    $response->assertOk();

    // Verificar el contenido de la respuesta JSON
    $response->assertJson([
        'success' => true,
        'message' => 'Usuarios eliminados correctamente',
    ]);

    // Verificar que los usuarios han sido eliminados de la base de datos
    foreach ($ids as $id) {
        $this->assertDatabaseMissing('users', ['id' => $id]);
    }

    // Caso 2: Probar eliminación sin IDs proporcionados
    $response = $this->withHeaders([
        'Authorization' => 'Bearer ' . $token,
    ])->deleteJson('/api/eliminar-cuenta-usuario', []);

    // Verificar que la solicitud sea errónea (código 400)
    $response->assertStatus(400);

    // Verificar el contenido de la respuesta JSON
    $response->assertJson([
        'success' => false,
        'message' => 'No se proporcionaron IDs de usuarios',
    ]);
}
public function test_usuarios_ultima_semana()
{
    // Crear un usuario administrador de prueba en la base de datos
    $usuarioAdmin = User::factory()->create([
        'rol' => 1,
        'email_verified_at' => now(),
    ]);

    // Autenticar el usuario administrador y obtener el token
    $token = $usuarioAdmin->createToken('test-token')->plainTextToken;

    // Caso 1: Probar la función usuariosUltimaSemana
    $response = $this->withHeaders([
        'Authorization' => 'Bearer ' . $token,
    ])->getJson('/api/usuarios-ultima-semana');

    // Verificar que la solicitud haya sido exitosa (código 200)
    $response->assertOk();

    // Obtener los datos de la respuesta JSON
    $responseData = $response->json();

    // Verificar que los datos de la semana actual y pasada son correctos
    $this->assertArrayHasKey('current_week_count', $responseData);
    $this->assertArrayHasKey('last_week_count', $responseData);
    $this->assertArrayHasKey('percentage_difference', $responseData);

    // Verificar el porcentaje de diferencia
    $this->assertIsNumeric($responseData['current_week_count']);
    $this->assertIsNumeric($responseData['last_week_count']);
    $this->assertIsNumeric($responseData['percentage_difference']);
}
}



