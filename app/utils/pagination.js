import _ from 'lodash';

/**
 * paginate
 *
 * @param object
 * @param page
 * @returns {Object}
 */
export default function paginate(object, page, itemsPerPage = 10) {
    const arr = _.values(object);
    return arr.filter((item, idx) => {
        return Math.floor(idx / itemsPerPage) + 1 === page;
    });
}
