import React, {useState, useEffect} from 'react'

import {
  Container,
  TextContainer,
} from './styles'

export default function App() {

  const [count, setCount] = useState(0)

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

  function changeText(){
    const actualText = text[count]
    if(count < text.length){
      return actualText
    } else {
      setCount(0)
      return actualText
    }
  }

  return (
    <>
      <TextContainer>
        <h1>{changeText()}</h1>
      </TextContainer>

      <TextContainer>
        <button onClick={() => setCount(count + 1)}>Me clique</button>
      </TextContainer>
    </>
  );
}

