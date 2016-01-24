import { FETCH_DATA } from '../actions/fetchData';
import { combineReducers } from 'redux';
import _ from 'lodash';

let data = function (state = {}, action) {
    console.log('action', action);
    switch(action.type) {
        case FETCH_DATA:
            return Object.assign({}, state,
                                 {
                                     stories: _.get(action, 'data.entities.stories', [])
                                 });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    data
})

export default rootReducer;
