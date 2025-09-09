import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'


export default function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
    </Routes>
  )
}
