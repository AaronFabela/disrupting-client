import React from 'react'
import '../styles/Home.css'
import Card from '../components/Card'

const HomePage = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='contenido'>
          Dashboard
          <div className='row'>
            <Card titulo={'Hola'} contenido={'Soy una carjeta'} />
            <Card titulo={'Hola'} contenido={'Soy una carjeta'} />
            <Card titulo={'Hola'} contenido={'Soy una carjeta'} />
            <Card titulo={'Hola'} contenido={'Soy una carjeta'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
