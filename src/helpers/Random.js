const RandomId = () => Date.now() + Math.floor(Math.random() * 9999999);

export const getTillTwoDecimal = (val) => val.toFixed(2);

export default RandomId;
