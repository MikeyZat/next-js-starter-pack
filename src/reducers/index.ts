import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import sliceReducer from './exampleSlice';

const rootReducer = combineReducers({
  example: exampleReducer,
  slice: sliceReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
