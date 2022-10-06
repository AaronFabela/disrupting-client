import React from 'react'
import '../styles/Home.css'
import Table from '../components/Table'

const HomePage = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <h1>Lista de Productos</h1>
        <Table />
      </div>
    </div>
  )
}

export default HomePage
