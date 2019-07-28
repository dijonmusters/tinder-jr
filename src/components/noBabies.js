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
`;

const NoBabies = () => (
  <Container>
    <BabyFace>
      <span role="img" aria-label="angel baby face">
        &#128124;
      </span>
    </BabyFace>
    <h1>You are out of babies!</h1>
  </Container>
);

export default NoBabies;
