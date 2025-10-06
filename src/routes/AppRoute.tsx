import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import QueroDoar from '@/pages/QueroDoar'
import LivrosDoados from '@/pages/LivrosDoados'

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<QueroDoar />} path="/quero-doar" />
        <Route element={<LivrosDoados />} path="/livros-doados" />
      </Routes>
    </BrowserRouter>
  )
}
