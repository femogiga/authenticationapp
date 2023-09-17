import { createSlice } from '@reduxjs/toolkit';


const inputSlice = createSlice({
  name: 'edit',
  initialState: {
    photoInput: '',
    nameInput: '',
    bioInput: '',
    phoneInput: '',
    emailInput: '',
    passwordInput: '',
  },
  reducers: {
    setInputValue: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      //   console.log(state.emailInput);
      //   console.log(state.phoneInput);
    },
    clear: (state) => {
      state.photoInput = '';
      state.nameInput = '';
      state.bioInput = '';
      state.phoneInput = '';
      state.emailInput = '';
      state.passwordInput = '';
    },
    submit: (state) => {
      const userDetails = {
        name: state.nameInput,
        bio: state.bioInput,
        email: state.emailInput,
        phone: state.phoneInput,
        password: state.passwordInput,
      };
      console.log(userDetails);
    },
  },
});

export const { setInputValue, clear, submit } = inputSlice.actions;
export default inputSlice.reducer;
