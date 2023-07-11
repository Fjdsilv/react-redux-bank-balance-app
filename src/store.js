import { configureStore } from "@reduxjs/toolkit";
import { bankAccountSlice } from "./features/banckAccountSlice";

export const store = configureStore({
    reducer: {
        bankAccount: bankAccountSlice.reducer
    }
})


// configureStore