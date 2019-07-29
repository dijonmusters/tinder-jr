import React, { useContext } from 'react';
import { BabyContext } from '../data/babyFetcher';
import styled from 'styled-components';

const Img = styled.img`
  ${props =>
    props.judgement && props.judgement === 'like'
      ? 'border: 3px solid #15db95'
      : 'border: 3px solid #f78888'};
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

const renderBaby = ({ id, url, judgement }) => (
  <Img key={id} src={url} judgement={judgement} />
);

const BabyList = () => {
  const { babies } = useContext(BabyContext);
  const judgedBabies = babies.filter(baby => baby.judgement);
  return <BabyGrid>{judgedBabies.map(renderBaby)}</BabyGrid>;
};

export default BabyList;
