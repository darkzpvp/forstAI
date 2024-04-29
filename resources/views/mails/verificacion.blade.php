@component('mail::message')
# Verificación de Correo Electrónico

¡Hola {{ $user->name }}!

Por favor, haz clic en el botón de abajo para verificar tu dirección de correo electrónico.

@component('mail::button', ['url' => route('verification.verify', ['id' => $user->id, 'hash' => sha1($user->email)])])
Verificar Correo Electrónico
@endcomponent

¡Gracias,<br>
{{ config('app.name') }}
@endcomponent
