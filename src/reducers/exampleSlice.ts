import { createSlice, CaseReducer } from '@reduxjs/toolkit';

// initial state

type State = number;

const initialState: State = 0;

// actions

const incrementAction: CaseReducer<State> = (state) => state + 1;

const decrementActions: CaseReducer<State> = (state) => state - 1;

const sliceCounter = createSlice({
  name: 'sliceCounter',
  initialState,
  reducers: {
    increment: incrementAction,
    decrement: decrementActions,
  },
});

export const { increment, decrement } = sliceCounter.actions;

export const getCounter = (state) => state.slice;

export default sliceCounter.reducer;
