import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './inputSlice';
import loginReducer from './loginSlice';

const store = configureStore({
  reducer: {
    edit: inputReducer,
    login: loginReducer,
  },
});

export default store;
