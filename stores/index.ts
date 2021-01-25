import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import AuthReducer from './auth/reducer';
import BioReducer from './bio/reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  bio: BioReducer,
});

const composedEnhancer = composeWithDevTools({});

const Store = createStore(rootReducer, composedEnhancer(applyMiddleware(thunkMiddleware)));
export default Store;