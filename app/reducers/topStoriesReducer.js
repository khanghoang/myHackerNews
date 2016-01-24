import { FETCH_DATA } from '../actions/fetchData';
import _ from 'lodash';
import Pagination from '../utils/pagination';

let topStoriesReducer = function (state = {}, action) {
    switch(action.type) {
        case FETCH_DATA:
            const stories = _.get(action, 'data.entities.stories', []);
            return Object.assign({},
                             state,
                             {
                                 stories: stories
                             },
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

export default topStoriesReducer;
