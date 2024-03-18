import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, error: null, isPending: false },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementByAmountAsync.fulfilled, (state, action) => {
        state.value += action.payload;
        state.error = null;
        state.isPending = false;
      })
      .addCase(incrementByAmountAsync.rejected, (state, action) => {
        state.value = null;
        state.error = action.error.message;
        state.isPending = false;
      })
      .addCase(incrementByAmountAsync.pending, (state, action) => {
        state.error = null;
        state.isPending = true;
      });
  },
});

export const incrementByAmountAsync = createAsyncThunk(
  "counter/incrementByAmountAsync",
  async (amount) => {
    return new Promise((resolve, reject) =>
      setTimeout(
        () => (amount % 3 === 0 ? reject("Error occured") : resolve(amount)),
        1000
      )
    );
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
