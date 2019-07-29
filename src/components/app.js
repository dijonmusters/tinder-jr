import React from 'react';
import styled from 'styled-components';
import Baby from '../containers/baby';
// import BabyList from '../hooks/babyList';
// import BabyProvider from '../data/babyFetcher';

const Container = styled.main`
  position: relative;
  background: linear-gradient(to right bottom, #89cff0, #f4c2c2);
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
      <Baby />
      {/* <BabyList /> */}
    </Container>
  );
};

export default App;

// Refactor with hooks
// baby.js
// => useEffect for events
// => useState for babies
// => use premade hook version

// app.js
// => <BabyProvider />
// => <BabyList />
