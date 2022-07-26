import { getList } from '../../API/APIProvider';

const FETCH_DATA = 'crypto/Home/FETCH_DATA';
const FILTER_DATA = 'crypto/Home/FILTER_DATA';

const INITIAL_DATA = {
  loading: true,
  coinData: [],
};

const fetchData = (loading, payload) => ({
  type: FETCH_DATA,
  payload,
  loading,
});

export const fetchApiData = () => async (dispatch) => {
  dispatch(fetchData(true, []));
  const data = await getList();
  const { coins } = data;
  dispatch(fetchData(false, coins));
};

export const filterCoins = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case FETCH_DATA: return { ...state, loading: action.loading, coinData: [...action.payload] };
    case FILTER_DATA: return { ...state, coinData: [...action.payload] };
    default: return state;
  }
};
