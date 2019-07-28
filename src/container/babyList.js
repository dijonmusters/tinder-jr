import React, { Component } from 'react';
import styled from 'styled-components';
import { getJudgedBabies } from '../data/api';

const Img = styled.img`
  ${props =>
    props.judgement && props.judgement === 'like'
      ? 'border: 3px solid green'
      : 'border: 3px solid red'};
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 0 2px;
`;

const BabyGrid = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

class BabyList extends Component {
  state = {
    babies: []
  };

  componentDidMount() {
    const babies = getJudgedBabies();
    this.setState({ babies });
  }

  renderBaby({ id, url, judgement }) {
    return <Img key={id} src={url} judgement={judgement} />;
  }

  render() {
    const { babies } = this.state;
    return <BabyGrid>{babies.map(this.renderBaby)}</BabyGrid>;
  }
}

export default BabyList;
