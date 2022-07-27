import { getDetails } from '../../API/APIProvider';

const FETCH_DATA = 'crypto/details/FETCH_DATA';

const INITIAL_DATA = {
  loading: true,
  coinDetails: [],
};

const fetchAction = (loading, coinDetails) => ({
  type: FETCH_DATA,
  loading,
  coinDetails,
});

export const fetchCoinDetail = (coinId) => async (dispatch) => {
  dispatch(fetchAction(true, []));
  const data = await getDetails(coinId);
  dispatch(fetchAction(false, data));
};

export default (state = INITIAL_DATA, action) => {
  const { type, loading, coinDetails } = action;

  switch (type) {
    case FETCH_DATA: return { ...state, loading, coinDetails };
    default: return state;
  }
};
