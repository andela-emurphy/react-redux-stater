import { createStore, applyMiddleware } from 'redux';
import combinedReducers from '../reducers/index';
import reducxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk';

export default (initialState) => {
  return createStore(
    combinedReducers,
    initialState,
    applyMiddleware(reducxImmutableStateInvariant(), thunk)
  );
}