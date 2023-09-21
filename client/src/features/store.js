import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './inputSlice';
import loginReducer from './loginSlice';
import thumbReducer from './thumbSlice';
import registerReducer from './registerSlice';

const store = configureStore({
  reducer: {
    edit: inputReducer,
    login: loginReducer,
    thumb: thumbReducer,
    register:registerReducer
  },
});

export default store;
