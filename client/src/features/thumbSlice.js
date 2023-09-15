import { createSlice } from '@reduxjs/toolkit';

const thumbSlice = createSlice({
  name: 'thumb',
  initialState: {
    visible: false,
  },
  reducers: {
    setVisible: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { setVisible } = thumbSlice.actions;
export default thumbSlice.reducer;
