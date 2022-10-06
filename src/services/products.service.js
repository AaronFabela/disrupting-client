import axios from 'axios'
import { API_URL } from '../api'

const getProducts = () => {
  return axios.get(API_URL + 'products/')
}

const addProduct = async (product) => {
  const { name, description, price } = product
  return axios.post(
    API_URL + 'products/',
    {
      name,
      description,
      price,
    },
    { headers: { 'Content-Type': 'application/json' } }
  )
}

const updateProduct = async (product) => {
  const { name, description, price, _id } = product
  return axios.put(
    API_URL + `products/${_id}`,
    {
      name,
      description,
      price,
    },
    { headers: { 'Content-Type': 'application/json' } }
  )
}

const deleteProduct = async (idProduct) => {
  return axios.delete(API_URL + `products/${idProduct}`)
}

const getProduct = async (idProduct) => {
  return axios.get(API_URL + `products/${idProduct}`)
}

const addProductToCar = async (idProduct) => {
  const prod = await getProduct(idProduct)
  const shoppingCar = localStorage.getItem('shopping-car')
  if (shoppingCar) {
    const aux = JSON.parse(shoppingCar)
    const newShoppingCar = [...aux, prod.data]
    localStorage.setItem('shopping-car', JSON.stringify(newShoppingCar))
  } else {
    localStorage.setItem('shopping-car', JSON.stringify([prod.data]))
  }
}

const deleteFromCar = (id) => {
  var shoppingCar = JSON.parse(localStorage.getItem('shopping-car'))
  shoppingCar.splice(id, 1)
  localStorage.setItem('shopping-car', JSON.stringify(shoppingCar))
}

const getShoppingCar = () => {
  return JSON.parse(localStorage.getItem('shopping-car'))
}

const clearCar = () => {
  localStorage.removeItem('shopping-car')
}

const productService = {
  getProducts,
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
  addProductToCar,
  getShoppingCar,
  deleteFromCar,
  clearCar,
}

export default productService
