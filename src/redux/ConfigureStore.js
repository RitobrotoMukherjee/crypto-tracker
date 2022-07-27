import { configureStore } from '@reduxjs/toolkit';
import home from './home/home';
import details from './details/details';

const store = configureStore({
  reducer: {
    home,
    details,
  },
});

export default store;
