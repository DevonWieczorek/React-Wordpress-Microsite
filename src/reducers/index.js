import { combineReducers } from 'redux';
import APIReducer from './APIReducer';
import MetaReducer from './MetaReducer';

export default combineReducers({
    api: APIReducer,
    meta: MetaReducer
});
