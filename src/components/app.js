import React from 'react';
import styled from 'styled-components';
import Baby from '../container/baby';
import BabyList from '../container/babyList';
import BabyProvider from '../data/babyFetcher';

const Container = styled.main`
  position: relative;
  background: linear-gradient(to right, #fdb99b, #cf8bf3, #a770ef);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-top: 2rem;
`;

const App = () => {
  return (
    <Container>
      <Title>Cool Baby?</Title>
      <p>Judge babies based on looks ... with hooks</p>
      <BabyProvider>
        <Baby />
        <BabyList />
      </BabyProvider>
    </Container>
  );
};

export default App;
