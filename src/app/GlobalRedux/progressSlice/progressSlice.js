import { createSlice } from '@reduxjs/toolkit'

export const progressSlice = createSlice({
    name: 'progressStep',
    initialState: {
        step: 1,
    },
    reducers: {
        nextStep: (state) => {
            state.step += 1
        },
        prevStep: (state) => {
            state.step -= 1
        },
        changeStep: (state, action) => {
            state.step -= action.payload
        },
    }
});
export const { 
    nextStep, prevStep, changeStep,
} = progressSlice.actions
export default progressSlice.reducer