import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../apiService';
import { useNavigate } from 'react-router-dom';

// Define an async action for login
export const loginAsync = createAsyncThunk(
  'login/loginAsync',
  async (credentials) => {
    try {
      const response = await apiService.create('/login', credentials);
      return response.data; // Assuming your API returns data with user information and token
    } catch (error) {
      throw error.response.data; // Throw an error if login fails
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    emailInput: '',
    passwordInput: '',
    data: null,
    loading: 'idle',
    error: null,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const { setInputValue, clear } = loginSlice.actions;

export default loginSlice.reducer;
