import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import morgan from "morgan";
import { resolve } from "path";
import cors from "cors";

const app = express();
const server = http.createServer(app);

const io = new SocketServer(server, {
   cors: {
     origin: "http://localhost:3000",
   },
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve("app/**/*")));

io.on("connection", (socket) => {
  console.log(`Nuevo cliente conectado: ${socket.id}`);

  socket.on("enviarFormulario", async (formData) => {
    try {
      // Aquí puedes colocar la lógica para enviar el formulario
      // Por ejemplo, llamar al controlador correspondiente
      // y luego emitir un evento de éxito
      console.log(`Recibido formulario del cliente ${socket.id}:`, formData);
      // Simulación de envío exitoso
      socket.emit("formularioEnviado", { success: true });
      // Actualizar prompts disponibles (simulación)
      io.emit("promptsDisponibles", 5);
    } catch (error) {
      // En caso de error, emitir un evento de error con el mensaje
      console.error(`Error al procesar formulario del cliente ${socket.id}:`, error);
      socket.emit("formularioError", { error: error.message });
    }
  });

  socket.on("message", (message) => {
    console.log(`Nuevo mensaje recibido del cliente ${socket.id}:`, message);
    // Emitir el mensaje a todos los clientes, excepto al que lo envió
    socket.broadcast.emit("message", {
      from: socket.id.slice(8),
      body: message,
    });
  });

  socket.on("disconnect", () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP y sockets escuchando en el puerto ${PORT}`);
});