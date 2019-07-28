import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BabyFace = styled.span`
  font-size: 5rem;
  animation: spin 1s infinite linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => (
  <Container>
    <BabyFace>&#128118;</BabyFace>
    <h1>The stork is delivering more babies...</h1>
  </Container>
);

export default Loading;
