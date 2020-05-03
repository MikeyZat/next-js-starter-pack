import * as types from 'utils/actionTypes';

export interface State {
  counter: number;
}

const initState: State = {
  counter: 0,
};

const exampleReducer = (state = initState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case types.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return { ...state };
  }
};

export const getCounter = (state) => state.example.counter;

export default exampleReducer;
