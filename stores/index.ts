import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import AuthReducer from './auth/reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

const composedEnhancer = composeWithDevTools({});

const Store = createStore(rootReducer, composedEnhancer(applyMiddleware(thunkMiddleware)));
export default Store;