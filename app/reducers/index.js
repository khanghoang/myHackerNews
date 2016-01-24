import { FETCH_DATA } from '../actions/fetchData';
import { combineReducers } from 'redux';
import _ from 'lodash';
import Pagination from '../utils/pagination';
import topStoriesReducer from './topStoriesReducer'

const rootReducer = combineReducers({
    topStoriesReducer
})

export default rootReducer;
