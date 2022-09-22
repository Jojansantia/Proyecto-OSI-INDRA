import React from 'react'

export interface IButton {
  color: string;
  setColor:(textColor: string) => void;
}

const Button = ({ color, setColor } : IButton) => {
  
  return (
    <button 
      className={`button btn${color}`}
      onClick={() => setColor(color)}
    >
    </button>
  )
}

export default Button