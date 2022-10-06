import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import productService from '../services/products.service'

const CrearProducto = () => {
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await productService.addProduct(data)
      alert('Producto creado correctamente')
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='home'>
      <div className='home-container'>
        <h1>Crear Nuevo Producto</h1>
        <form className='crear-producto'>
          <div class='form-group'>
            <label for='nombreProducto'>Nombre Producto</label>
            <input
              required
              type='text'
              class='form-control'
              id='name'
              name='name'
              placeholder='Nombre Producto'
              value={data.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class='form-group'>
            <label for='descripcion'>Decripcion Producto</label>
            <input
              required
              type='text'
              class='form-control'
              id='description'
              name='description'
              placeholder='Descripcion Producto'
              value={data.description}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class='form-group'>
            <label for='price'>Precio</label>
            <input
              required
              type='number'
              name='price'
              class='form-control'
              id='price'
              placeholder='price'
              value={data.price}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button
            type='submit'
            class='btn btn-primary'
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
          <button
            type='submit'
            class='btn btn-danger'
            onClick={(e) => navigate('/home')}
          >
            Regresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default CrearProducto
