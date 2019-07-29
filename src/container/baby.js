import React, { useEffect, useContext } from 'react';
import Card from '../components/card';
import NoBabies from '../components/noBabies';
import { BabyContext } from '../data/babyFetcher';

const chooseBaby = babies => {
  const unjudgedBabies = babies.filter(baby => !baby.judgement);
  if (unjudgedBabies.length > 0) {
    const randomIndex =
      Math.floor(Math.random() * unjudgedBabies.length - 1) + 1;
    return unjudgedBabies[randomIndex];
  }
  return null;
};

const handleKey = (selected, judge, e) => {
  const { code } = e;
  if (code === 'ArrowLeft') {
    judge(selected, 'dislike');
  }
  if (code === 'ArrowRight') {
    judge(selected, 'like');
  }
};

const Baby = props => {
  const { babies, judge } = useContext(BabyContext);
  const baby = chooseBaby(babies);

  const handleInput = e => handleKey(baby, judge, e);

  useEffect(() => {
    window.addEventListener('keyup', handleInput);
    return () => {
      window.removeEventListener('keyup', handleInput);
    };
  });

  return baby ? (
    <Card baby={baby} judge={opinion => judge(baby, opinion)} />
  ) : (
    <NoBabies />
  );
};

export default Baby;
