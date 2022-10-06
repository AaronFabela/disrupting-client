import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import productService from '../services/products.service'

const Table = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const handleAdd = (e) => {
    navigate('/addProduct')
  }

  const handleShopping = (e) => {
    navigate('/shopping')
  }

  const handleAddToCar = (id) => {
    productService.addProductToCar(id)
    alert('Producto añadido al carrito correctamente')
  }

  const handleDelete = (id) => {
    productService.deleteProduct(id)
    alert('Producto eliminado correctamente')
    window.location.reload()
  }

  const handleEdit = (id) => {
    navigate(`/updateProduct/${id}`)
  }

  useEffect(() => {
    // localStorage.setItem('shopping-car', [])
    productService.getProducts().then(
      (response) => {
        setProducts(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])
  return (
    <div>
      <button
        type='button'
        className='btn btn-info'
        onClick={(e) => handleAdd(e)}
      >
        Añadir nuevo producto
      </button>
      <button
        type='button'
        className='btn btn-secondary'
        onClick={(e) => handleShopping(e)}
      >
        Ver carrito
      </button>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Descripcion</th>
            <th scope='col'>Precio</th>
            <th scope='col'>Accion</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope='row'>#{index}</th>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <button
                  type='button'
                  className='btn btn-success'
                  onClick={() => handleAddToCar(product._id)}
                >
                  Añadir a carrito
                </button>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => handleDelete(product._id)}
                >
                  Eliminar
                </button>
                <button
                  type='button'
                  className='btn btn-warning'
                  onClick={() => handleEdit(product._id)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
