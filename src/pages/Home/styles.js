import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props ? props.color : '#77B3EB'};
  transition: background-color 1s ease-in;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  flex-direction: column;
`;