import React, { useState, useEffect, createContext } from 'react';
import { fetchAllBabies, rewriteBabies } from '../data/api';
import Loading from '../components/loading';

const BabyContext = createContext({});

const BabyFetcher = props => {
  const [babies, setBabies] = useState([]);

  const getBabies = async () => {
    const newBabies = await fetchAllBabies();
    setBabies(newBabies.babies);
  };

  useEffect(() => {
    getBabies();
  }, []);

  const judge = (baby, opinion) => {
    const judgedBaby = babies.find(b => b.id === baby.id);
    judgedBaby.judgement = opinion;
    rewriteBabies(babies);
    getBabies();
  };

  return (
    <BabyContext.Provider value={{ babies, judge }}>
      {babies.length > 0 ? props.children : <Loading />}
    </BabyContext.Provider>
  );
};

export default BabyFetcher;
export { BabyContext };
