import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout.tsx';
import Home from './pages/Home.tsx';
function App() {


  return (

    <BrowserRouter>
      <Routes>
    
        <Route element={<Layout />}> 
        
          <Route path="/" element={<Home />} index />

        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
