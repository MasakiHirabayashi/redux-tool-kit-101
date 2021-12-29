import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    idCount: 3,
    tasks: [
        {
            id: 1,
            title: "TASK A",
            completed: false,
        },
        {
            id: 2,
            title: "TASK B",
            completed: true,
        },
        {
            id: 3,
            title: "TASK C",
            completed: false,
        },
    ],
    isSaveSuccess: false,
};

export const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        // actionの定義
        newTask: (state, action) => {
            state.idCount++;
            const newItem = {
                id: state.idCount,
                title: action.payload,
                completed: false,
            };
            state.tasks = [newItem, ...state.tasks];
        },
        completeTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload.id);
            if (task) {
                task.completed = !task.completed;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
        },
    },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

// react側からstateの値を参照できるようにexportする
export const selectTasks = (state) => state.task.tasks;

// reducerをexportして、store.jsで一括管理する
export default taskSlice.reducer;
