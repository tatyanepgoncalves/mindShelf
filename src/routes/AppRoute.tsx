import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}
