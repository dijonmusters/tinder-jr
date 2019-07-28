import React, { Component } from 'react';
import styled from 'styled-components';
import Loading from './loading';
import Baby from '../container/baby';
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
        <Title>Tinder Jr.</Title>
        <p>Find other parents with cute babies</p>
        {babies ? (
          <Baby babies={babies} refresh={this.fetchNewBabies} />
        ) : (
          <Loading />
        )}
      </Container>
    );
  }
}

export default App;

// Refactor with hooks
// - app.js => useEffect
// - card.js => useEffect, useState, useContext
// - maybe do baby.js instead and introduce context
