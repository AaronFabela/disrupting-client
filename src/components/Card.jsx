import React from 'react'

const Card = ({ titulo, contenido }) => {
  return (
    <div className='col-xl-3 col-md-6 mb-4'>
      <div className='card border-left-primary shadow h-100 py-2'>
        <div className='card-body'>
          <div className='row no-gutters align-items-center'>
            <div className='col mr-2'>{titulo}</div>
            <div className='col-auto'>{contenido}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
