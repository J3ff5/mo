import React, {useState} from 'react'

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

  function changeText(){
    if (count === 9) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }


  return (
    <>
      {
        count === 0 &&
        <TextContainer>
          <h1>{a}</h1>
        </TextContainer>
      }

      {
        count === 1 &&
        <TextContainer>
          <h1>{b}</h1>
        </TextContainer>
      }

      {
        count === 2 &&
        <TextContainer>
          <h1>{c}</h1>
        </TextContainer>
      }

      {
        count === 3 &&
        <TextContainer>
          <h1>{d}</h1>
        </TextContainer>
      }

      {
        count === 4 &&
        <TextContainer>
          <h1>{e}</h1>
        </TextContainer>
      }

      {
        count === 5 &&
        <TextContainer>
          <h1>{f}</h1>
        </TextContainer>
      }

      {
        count === 6 &&
        <TextContainer>
          <h1>{g}</h1>
        </TextContainer>
      }

      {
        count === 7 &&
        <TextContainer>
          <h1>{h}</h1>
        </TextContainer>
      }

      {
        count === 8 &&
        <TextContainer>
          <h1>{i}</h1>
        </TextContainer>
      }

      {
        count === 9 &&
        <TextContainer>
          <h1>{j}</h1>
        </TextContainer>
      }
      <TextContainer>
      <button onClick={() => changeText()}>Me clique</button>
      </TextContainer>
    </>
  );
}

