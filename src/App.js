import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Layout from './pages/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Rutas Publicas */}
        <Route exact path='login' element={<Login />} />
        <Route exact path='home' element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
