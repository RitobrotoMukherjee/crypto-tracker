import { configureStore } from '@reduxjs/toolkit';
import home from './home/home';

const store = configureStore({
  reducer: {
    home,
  },
});

export default store;
