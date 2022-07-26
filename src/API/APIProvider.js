const LIST_API = 'https://api.coinstats.app/public/v1/coins';
const DETAILS_API = 'https://api.coinstats.app/public/v1/markets';

const getList = async () => {
  const response = await fetch(LIST_API);
  return response.json();
};

const getDetails = async (coinId) => {
  const response = await fetch(`${DETAILS_API}?coinId=${coinId}`);
  return response.json();
};

export { getList, getDetails };

export default { 'Content-Type': 'application/json' };
