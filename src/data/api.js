import fileData from '../data/babies';

const getBabies = () => JSON.parse(localStorage.getItem('babies'));
const getJudgedBabies = () => {
  const babies = getBabies();
  return babies.filter(baby => baby.judgement);
};

const rewriteBabies = babies => {
  localStorage.setItem('babies', JSON.stringify(babies));
};

const resetBabies = () => {
  localStorage.removeItem('babies');
};

const fetchBabies = async () =>
  new Promise((resolve, reject) => {
    const cachedData = getBabies();
    const babies = cachedData && cachedData.filter(baby => !baby.judgement);
    cachedData
      ? resolve({ babies })
      : setTimeout(() => {
          rewriteBabies(fileData);
          resolve({ babies: fileData });
        }, 1600);
  });

export { fetchBabies, rewriteBabies, getBabies, resetBabies, getJudgedBabies };
