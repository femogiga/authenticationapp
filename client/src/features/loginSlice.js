import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    emailInput: '',
    passwordInput: '',
  },
  reducers: {
    setInputValue: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clear: (state) => {
      state.emailInput = '';
      state.passwordInput = '';
    },
    submit: (state) => {
      const credentials = {
        email: state.emailInput,
        password: state.passwordInput,
      };
      console.log(credentials);
    },
  },
});

export const { setInputValue, clear, submit } = loginSlice.actions;
export default loginSlice.reducer;
