import { combineReducers } from 'redux';
import exampleReducer, { State as ExampleState } from './exampleReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;

export interface RootStore {
  example: ExampleState;
}
