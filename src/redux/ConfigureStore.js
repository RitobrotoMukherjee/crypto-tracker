import { configureStore } from '@reduxjs/toolkit';
import home from './home/home';

export default configureStore({
  reducer: {
    home,
  },
});
