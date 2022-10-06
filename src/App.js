import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
// import Layout from './pages/Layout'
import CrearProducto from './pages/CrearProducto'
import EditarProducto from './pages/EditarProducto'
import Carrito from './pages/Carrito'

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* <Route path='/' element={<Layout />}> */}
        {/* Rutas Publicas */}
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/addProduct' element={<CrearProducto />} />
        <Route exact path='/updateProduct/:id' element={<EditarProducto />} />
        <Route exact path='/shopping' element={<Carrito />} />

        {/* </Route> */}
      </Routes>
    </div>
  )
}

export default App
