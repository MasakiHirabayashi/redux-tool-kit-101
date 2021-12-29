import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import taskReducer from "../features/task/taskSlice";

/**
 * 複数のreducerを自動で結合する
 */
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        task: taskReducer,
    },
});
