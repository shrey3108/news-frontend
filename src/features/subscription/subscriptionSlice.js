import { createSlice } from '@reduxjs/toolkit';

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: [],
  reducers: {
    addSubscription: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
