import { createSlice } from '@reduxjs/toolkit';
import apiService from '../apiService';


const loginSlice = createSlice({
  name: 'login',
  initialState: {
    emailInput: '',
    passwordInput: '',
    data:null,
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
      apiService
        .create('/users/login', credentials)
        .then((response) => {
          if (response.status === 200 && response.data.user) {
            console.log(response);
            state.data = [...response.data]

          }
        })
        .catch((error) => console.error(error));
      console.log(credentials);
      console.log(state.data)
    },
  },
});

export const { setInputValue, clear, submit } = loginSlice.actions;
export default loginSlice.reducer;
