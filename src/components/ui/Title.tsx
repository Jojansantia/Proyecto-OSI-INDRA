import React from 'react'

export interface ITitle {
	color: string;
}

const Title = ({ color } : ITitle) => {

  return (
    <h1 
			className={color && `text${color}`}
    >
			Prueba Básica
    </h1>
  )
}

export default Title