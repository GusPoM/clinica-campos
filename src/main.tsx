import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Agenda from './pages/agenda'
import Associados from './pages/associados'
import Cadastro from './pages/cadastro'
import Login from './pages/login'
import Perfil from './pages/perfil'
import Sobre from './pages/sobre'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/associados" element={<Associados />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/sobre" element={<Sobre />} />
    </Routes>
  </BrowserRouter>
)