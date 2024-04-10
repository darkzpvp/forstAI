import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Registrar from './pages/Registrar.tsx';
import Olvide from './pages/Olvide.tsx'
import Error from './pages/Error.tsx';
import Generar from './pages/Generar.tsx';
import Carrito from './pages/Carrito.tsx';
import Admin from './pages/Admin.tsx';
function App() {


  return (

    <BrowserRouter>
      <Routes>
    
     
        
          <Route path="/" element={<Home />} index />

      
        <Route path="/login" element={<Login />} index />
        <Route path="/registrar" element={<Registrar />} index />
        <Route path="/olvide" element={<Olvide />} index />
        <Route path="*" element={<Error />} />
        <Route path="/generar" element={<Generar />} index />
        <Route path="/carrito" element={<Carrito />} index />
        <Route path="/admin" element={<Admin />} index />

      </Routes>
    </BrowserRouter>
   
  )
}

export default App
