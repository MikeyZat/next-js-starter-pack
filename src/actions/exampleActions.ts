import * as types from 'utils/actionTypes';

export const incrementCounter = () => ({
  type: types.INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: types.DECREMENT_COUNTER,
});
