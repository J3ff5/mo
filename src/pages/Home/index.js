import React, { useState } from 'react'

import {
  TextContainer,
  Image,
} from './styles'

import Fro from '../../assets/crisantemo.png'

export default function App() {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [color, setColor] = useState('')

  const a = 'Oi meu amor'
  const b = 'Você é muito especial pra mim'
  const c = 'Eu te amo'
  const d = 'Eu te amo muito'
  const e = 'Eu te amo muito muito'
  const f = 'Eu te amo muito muito muito'
  const g = 'A gente vai casar e viver feliz pra sempre'
  const h = 'Mas eu sou tímido pra falar isso'
  const i = 'Por isso fiz esse singelo site'
  const j = 'I love u <3'

  const text = [a, b, c, d, e, f, g, h, i, j]
  const colors = ['#935AF2', '#E69B56', '#77B3EB', '#58E6C2', '#F0A4E0', '#B8A1F0', '#B5F0A1', '#E6DA81', '#F05B47', '#60EEF0']

  function changeText(){
    const actualText = text[count]
    if(count < text.length){
      return actualText
    } else {
      setCount(0)
      return actualText
    }
  }

  function changeColor(){
    setCount2(Math.floor(Math.random() * (9 - 0)))
    setColor(colors[count2])
    console.log(color)
  }

  return (
    <>
      <TextContainer>
        <h1>{changeText()}</h1>
      </TextContainer>

      <TextContainer>
        <button onClick={() => {
            changeColor()
            setCount(count + 1)
        }}>Me clique</button>
      </TextContainer>

      <Image color={color}>
        <img src={Fro} alt="Fro"/>
      </Image>
    </>
  );
}

