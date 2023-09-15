import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './inputSlice';
import loginReducer from './loginSlice';
import thumbReducer from './thumbSlice';

const store = configureStore({
  reducer: {
    edit: inputReducer,
    login: loginReducer,
    thumb: thumbReducer,
  },
});

export default store;
