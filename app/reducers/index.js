import { FETCH_DATA } from '../actions/fetchData';
import { combineReducers } from 'redux';

let data = function (state = [], action) {
    switch(action.type) {
        case FETCH_DATA:
            return [action.data, ...state];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    data
})

export default rootReducer;
