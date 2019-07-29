import React, { Component } from 'react';
import Card from '../components/card';
import NoBabies from '../components/noBabies';
import { rewriteBabies, fetchBabies } from '../data/api';

class Baby extends Component {
  state = {
    babies: []
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKey.bind(this));
    this.fetchNewBabies();
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKey.bind(this));
  }

  fetchNewBabies = async () => {
    const { babies } = await fetchBabies();
    const baby = this.chooseBaby(babies);
    this.setState({ babies, baby });
  };

  handleKey(e) {
    const { code } = e;
    if (code === 'ArrowLeft') {
      this.judge('dislike');
    }
    if (code === 'ArrowRight') {
      this.judge('like');
    }
  }

  judge(baby, opinion) {
    const { babies } = this.state;
    const judgedBaby = babies.find(b => b.id === baby.id);
    judgedBaby.judgement = opinion;
    rewriteBabies(babies);
    this.fetchNewBabies();
  }

  chooseBaby(babies) {
    const unjudgedBabies = babies.filter(baby => !baby.judgement);

    if (unjudgedBabies.length > 0) {
      const randomIndex = Math.floor(Math.random() * babies.length - 1) + 1;
      return unjudgedBabies[randomIndex];
    }

    return null;
  }

  render() {
    const { baby } = this.state;
    return baby ? (
      <Card baby={baby} judge={opinion => this.judge(baby, opinion)} />
    ) : (
      <NoBabies />
    );
  }
}

export default Baby;
