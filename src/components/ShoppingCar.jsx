import React, { useEffect, useState } from 'react'
import productService from '../services/products.service'

const ShoppingCar = () => {
  const [shopping, setShopping] = useState([])
  // const [aux, setAux] = useState([])

  const handleDelete = (id) => {
    productService.deleteFromCar(id)
    alert('Producto eliminado correctamente')
    window.location.reload()
  }

  useEffect(() => {
    setShopping(productService.getShoppingCar)
  }, [])
  return (
    <div>
      {shopping == null || shopping.length < 1 ? (
        <h1>Carrito esta vacio</h1>
      ) : (
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
            {shopping.map((product, index) => (
              <tr key={index}>
                <th scope='row'>#{index}</th>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => handleDelete(index)}
                  >
                    Eliminar del carrito
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ShoppingCar
