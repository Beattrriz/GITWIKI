import React from 'react'
import {ButtonContainer}  from './styles'

function Buttonn({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
        Buscar
    </ButtonContainer>
  )
}

export default Buttonn;