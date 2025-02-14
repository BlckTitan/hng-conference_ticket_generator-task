import { createSlice } from '@reduxjs/toolkit'

export const ticketSlice = createSlice({
    name: 'ticketStep',
    initialState: {
        ticketType: [],
        numberOfTickets: 1, 
        name: '',
        email: '',
        specialRquest: '',
        submitStatus: false
    },
    reducers: {
        getticketType: (state, action) => {
            state.ticketType = action.payload
        },
        getNumberOfTickets: (state, action) => {
            state.numberOfTickets = action.payload
        },
        getName: (state, action) => {
            state.name = action.payload
        },
        getEmail: (state, action) => {
            state.email = action.payload
        },
        getSpecialRequest: (state, action) => {
            state.specialRequest = action.payload
        },
        getSubmitStatus: (state, action) => {
            state.submitStatus = action.payload
        }
    }
});
export const { 
    getticketType, getNumberOfTickets, getProfilePhoto,
    getName, getEmail, getSpecialRequest, getAvatarData
} = ticketSlice.actions
export default ticketSlice.reducer