import React, { useEffect, useState } from 'react'

import { Container, TextContainer } from './styles'
import { colors } from '../../utils/colors'
import { text } from '../../constants/textos'


export default function App() {

  const [color, setColor] = useState()
  const [changeText, setChangeText] = useState(0)

  useEffect(() => {
    handleClick()
  }, [])

  function handleClick() {
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }

  function handleChangeText() {
    if(changeText === 9) {
      setChangeText(0)
    } else {
      setChangeText(changeText + 1)
    }
  }

  return (
    <Container 
      color={color} 
      onClick={() => handleClick()}
    >
      <TextContainer
        onClick = {() => handleChangeText()}
      >
        <h1>{text[changeText]}</h1>
      </TextContainer>
    </Container>
  );
}

