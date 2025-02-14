'use client'
import { configureStore } from '@reduxjs/toolkit';
import progressReducer from '../GlobalRedux/progressSlice/progressSlice'
import ticketReducer from '../GlobalRedux/ticketSlice/ticketSlice'

const store = configureStore({
  reducer: {
    currentStepData: progressReducer,
    ticketData: ticketReducer,
  },
});
export default  store;