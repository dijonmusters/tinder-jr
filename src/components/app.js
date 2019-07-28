import React, { Component } from 'react';
import styled from 'styled-components';
import Loading from './loading';
import Baby from '../container/baby';
import BabyList from '../container/babyList';
import { fetchBabies } from '../data/api';

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

class App extends Component {
  state = {};

  fetchNewBabies = async () => {
    this.setState({ babies: null });
    const babies = await fetchBabies();
    this.setState(babies);
  };

  componentDidMount() {
    this.fetchNewBabies();
  }

  render() {
    const { babies } = this.state;
    return (
      <Container>
        <Title>Cool Baby?</Title>
        <p>Judge babies based on looks ... with hooks</p>
        {babies ? (
          <Baby babies={babies} refresh={this.fetchNewBabies} />
        ) : (
          <Loading />
        )}
        <BabyList />
      </Container>
    );
  }
}

export default App;

// Refactor with hooks
// - app.js => useEffect
// - baby.js => useEffect for events
//           => useState for selectedBaby
//           => useContext for getting and refreshing babies
//  Talk about testing => research enzyme and react testing library
