import React, { useState } from 'react'
import Button from './ui/Button'
import ModalScreen from './ui/ModalScreen'
import Title from './ui/Title'

const PpalScreen = () => {
  const [color, setColor] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleButton = (auxColor: string) => {
    setColor(auxColor)
    setOpenModal(true)
  }

  return (
    <div className='ppalScreen' >
      <div className='auxComponent'>
        <Title color={color} />

        <div>
          <Button color={"Red"} setColor={handleButton} />
          <Button color={"Blue"} setColor={handleButton} />
        </div>

        <ModalScreen color={color} openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </div>
  )
}

export default PpalScreen