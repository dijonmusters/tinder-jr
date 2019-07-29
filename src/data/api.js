import fileData from '../data/babies';

const getBabies = () => JSON.parse(localStorage.getItem('babies'));

const rewriteBabies = babies => {
  localStorage.setItem('babies', JSON.stringify(babies));
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

const fetchAllBabies = async () =>
  new Promise((resolve, reject) => {
    const cachedData = getBabies();
    cachedData
      ? resolve({ babies: cachedData })
      : setTimeout(() => {
          rewriteBabies(fileData);
          resolve({ babies: fileData });
        }, 1600);
  });

export { fetchBabies, fetchAllBabies, rewriteBabies, getBabies };
