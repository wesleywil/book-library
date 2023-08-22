import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/books";
import libraryReducer from "./library/library";
import utilReducer from "./utils/utils";

export const store = configureStore({
    reducer:{
        utils:utilReducer,
        books:bookReducer,
        library:libraryReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;