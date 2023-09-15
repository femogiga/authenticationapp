import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './inputSlice'

const store = configureStore({
    reducer: {
      edit:inputReducer
  },
});


export default store;
