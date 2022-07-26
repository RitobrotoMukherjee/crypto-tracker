const FETCH_DATA = 'crypto/Home/FETCH_DATA';
const FILTER_DATA = 'crypto/Home/FILTER_DATA';

const INITIAL_DATA = {
  loading: true,
  coinData: [],
};

export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const filterCoins = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case FETCH_DATA: return { ...state, loading: false, coinData: [...action.payload] };
    case FILTER_DATA: return { ...state, coinData: [...action.payload] };
    default: return state;
  }
};
