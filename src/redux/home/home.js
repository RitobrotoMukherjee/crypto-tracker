const FETCH_DATA = 'crypto/Home/FETCH_DATA';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA: return { ...state };
    default: return state;
  }
};
