import React, { Component } from 'react';
import Card from '../components/card';
import NoBabies from '../components/noBabies';
import { getBabies, rewriteBabies, resetBabies } from '../data/api';

class Baby extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keyup', this.handleKey.bind(this));
    const selectedBaby = this.chooseBaby();
    this.setState({ selectedBaby });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKey.bind(this));
  }

  handleKey(e) {
    const { code } = e;
    if (code === 'ArrowLeft') {
      this.judge('dislike');
    }
    if (code === 'ArrowRight') {
      this.judge('like');
    }
    if (code === 'Escape') {
      resetBabies();
      this.props.refresh();
    }
  }

  judge(opinion) {
    console.log(this.state);
    const babies = getBabies();
    const baby = babies.find(baby => baby.url === this.state.selectedBaby.url);
    baby.judgement = opinion;
    rewriteBabies(babies);
    this.props.refresh();
  }

  chooseBaby() {
    const { babies } = this.props;
    const randomIndex = Math.floor(Math.random() * babies.length - 1) + 1;
    return babies[randomIndex];
  }

  render() {
    const { selectedBaby } = this.state;
    return selectedBaby ? (
      <Card baby={selectedBaby} judge={this.judge.bind(this)} />
    ) : (
      <NoBabies />
    );
  }
}

export default Baby;
