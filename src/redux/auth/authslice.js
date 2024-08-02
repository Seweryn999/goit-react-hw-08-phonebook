import { createSlice } from '@reduxjs/toolkit';
import opAuth from './opAuth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isChecking: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isChecking = true;
};
const handleRejected = (state, action) => {
  state.isChecking = false;
  state.error = action.payload;
};

const handleFulfiledPartly = state => {
  state.isChecking = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(opAuth.register.pending, handlePending)
      .addCase(opAuth.register.fulfilled, (state, action) => {
        handleFulfiledPartly(state);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(opAuth.register.rejected, handleRejected)
      .addCase(opAuth.logIn.pending, handlePending)
      .addCase(opAuth.logIn.fulfilled, (state, action) => {
        handleFulfiledPartly(state);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(opAuth.logIn.rejected, handleRejected)
      .addCase(opAuth.logOut.pending, handlePending)
      .addCase(opAuth.logOut.fulfilled, (state, action) => {
        handleFulfiledPartly(state);
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(opAuth.logOut.rejected, handleRejected)
      .addCase(opAuth.refresh.pending, handlePending, (state, action)=>{
        state.isRefreshing=true
      })
      .addCase(opAuth.refresh.fulfilled, (state, action) => {
        state.isChecking = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(opAuth.refresh.rejected, handleRejected, (state, action)=>{
        state.isRefreshing= false} )
});

export const authReducer = authSlice.reducer;
