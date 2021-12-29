import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

/**
 * 複数のreducerを自動で結合する
 */
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
