import { createSlice } from '@reduxjs/toolkit';
import apiService from '../apiService';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    emailInput: '',
    passwordInput: '',
    response: {},
    error: {},
  },

  reducers: {
    setRegisterInputs: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clear: (state) => {
      state.emailInput = '';
      state.passwordInput = '';
    },
    setMesssage: (state, action) => {
      const { response } = action.payload;
      state.response = response;
    },
    setError: (state, action) => {
      const { error } = action.payload;
      state.error = error;
    },
  },
});

export const { setRegisterInputs, setMesssage, setError } =
  registerSlice.actions;
export default registerSlice.reducer;
