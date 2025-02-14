import { createSlice } from '@reduxjs/toolkit'

export const ticketSlice = createSlice({
    name: 'ticketStep',
    initialState: {
        ticketType: [],
        numberOfTickets: 1, 
        profilePhoto: '',
        name: '',
        email: '',
        specialRquest: ''
    },
    reducers: {
        getticketType: (state, action) => {
            state.ticketType = action.payload
        },
        getNumberOfTickets: (state, action) => {
            state.numberOfTickets = action.payload
        },
        getProfilePhoto: (state, action) => {
            state.profilePhoto = action.payload
        },
        getName: (state, action) => {
            state.name = action.payload
        },
        getEmail: (state, action) => {
            state.email = action.payload
        },
        getSpecialRequest: (state, action) => {
            state.specialRequest = action.payload
        }
    }
});
export const { 
    getticketType, getNumberOfTickets, getProfilePhoto,
    getName, getEmail, getSpecialRequest
} = ticketSlice.actions
export default ticketSlice.reducer