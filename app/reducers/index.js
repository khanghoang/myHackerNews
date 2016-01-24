import { FETCH_DATA } from '../actions/fetchData';
import { combineReducers } from 'redux';
import _ from 'lodash';
import Pagination from '../utils/pagination';

let currentPage = function (state = {}, action) {
    // console.log('action', action);
    switch(action.type) {
        case FETCH_DATA:
            const stories = _.get(action, 'data.entities.stories', []);
            return Object.assign({}, state,
                                 {
                                     pageNumber: 1,
                                     pageData: Pagination(stories, 1),
                                     nextPage: true,
                                     prevPage: false
                                 });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    currentPage
})

export default rootReducer;
