import React from 'react'
import { useNavigate } from 'react-router-dom'
import ShoppingCar from '../components/ShoppingCar'
import productService from '../services/products.service'

const Carrito = () => {
  const navigate = useNavigate()
  const clear = (e) => {
    productService.clearCar()
    alert('Se vacío correctamente el carrito')
    window.location.reload()
  }
  return (
    <div className='home'>
      <div className='home-container'>
        <h1>Carrito de Compras</h1>
        <button
          type='button'
          className='btn btn-danger'
          onClick={(e) => clear(e)}
        >
          Vaciar carrito
        </button>
        <button
          type='button'
          className='btn btn-info'
          onClick={(e) => navigate('/home')}
        >
          Regresar
        </button>
        <ShoppingCar />
      </div>
    </div>
  )
}

export default Carrito
