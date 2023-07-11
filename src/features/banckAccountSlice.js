import { createSlice } from "@reduxjs/toolkit";

const initialState = { balance: 15 };

export const bankAccountSlice = createSlice({
    name: 'bankAccount',
    initialState,
    reducers: {
        deposit(state, action) {
            state.balance += action.payload
        },

        withdraw(state, action) {
            if(state.balance >= action.payload) {
                state.balance -= action.payload
            }
        }
    }
})

export const { deposit, withdraw } = bankAccountSlice.actions;


// createSlice