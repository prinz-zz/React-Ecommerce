import { createSlice } from '@reduxjs/toolkit';

export const clientSlice = createSlice({
    name: 'client',
    initialState: {
        clients: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //Fetch product
        getClientStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getClientSuccess: (state, action) => {
            state.isFetching = false;
            state.clients = action.payload;
        },
        getClientFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
         //Delete Client
         deleteClientStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteClientSuccess: (state, action) => {
            state.isFetching = false;
            state.clients.splice(state.clients.findIndex((item)=> item._id === action.payload, 1))
        },
        deleteClientFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //Update Client
        updateClientStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateClientSuccess: (state, action) => {
            state.isFetching = false;
            state.clients[state.clients.findIndex((item) => item._id === action.payload.id)] = action.payload.user;
        },
        updateClientFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //Add Client
        addClientStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addClientSuccess: (state, action) => {
            state.isFetching = false;
            state.clients.push(action.payload);
        },
        addClientFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
        
    },
}); 


export const {
    getClientStart,
    getClientSuccess,
    getClientFailure,
    deleteClientStart,
    deleteClientSuccess,
    deleteClientFailure,
    updateClientStart,
    updateClientSuccess,
    updateClientFailure,
    addClientStart,
    addClientSuccess,
    addClientFailure } = clientSlice.actions;
export default clientSlice.reducer;