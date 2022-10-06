import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import productService from '../services/products.service'

const EditarProducto = () => {
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
  })

  const { id } = useParams()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await productService.updateProduct(data)
      alert('Producto editado correctamente')
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    productService.getProduct(id).then(
      (response) => {
        setData(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [id])

  return (
    <div className='home'>
      <div className='home-container'>
        <h1>Editar Producto</h1>
        <form className='crear-producto'>
          <div class='form-group'>
            <label for='nombreProducto'>Nombre Producto Editar</label>
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

export default EditarProducto
