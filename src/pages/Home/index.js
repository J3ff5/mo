import React, { useState } from 'react'

import { Container } from './styles'

import Flower from './components/flower'


export default function App() {

  const [count, setCount] = useState(true)

  return (
    <Container 
      onClick={() =>{ 
        setCount(!count)
      }}>
      <Flower color={count}/>
    </Container>
  );
}

