import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
    value: 0,
    status: "idle",
};

export const incrementAsync = createAsyncThunk(
    "counter/fetchCount",
    async (amount) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

/**
 * sliceの作成
 * rtkのcreateSlice関数を使って生成
 */
export const counterSlice = createSlice({
    //sliceを識別するためのname属性
    name: "counter",
    // slice内のstateの初期値（外出し）
    initialState,
    // slice内のreducerを定義
    reducers: {
        // actionの定義1
        increment: (state) => {
            // このactionが呼び出されたときにstateをどう変更するか
            state.value += 1;
        },
        // actionの定義2
        decrement: (state) => {
            state.value -= 1;
        },
        // actionの定義3
        incrementByAmount: (state, action) => {
            // payload: actionが持つ引数的な属性
            state.value += action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.value += action.payload;
            });
    },
});

// reactのコンポーネント側からactionを呼び出せるようにexportする
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// reactのコンポーネント側からuseSelectを使ってstateの値を参照できるようにexportする
export const selectCount = (state) => state.counter.value;

// stateの値が奇数の時のみインクリメントする関数。使わないのでコメントアウトしておく
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

// createSliceで作成したreducerをexportして、store.jsで一括管理する
export default counterSlice.reducer;
