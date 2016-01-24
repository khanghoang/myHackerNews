import {expect, should} from 'chai';
import Pagination from '../../app/utils/pagination';

describe('Pagination Utils', () => {
    it('pagination correctly', () => {
        let object = {
            "_1": {id: "_1", name: "foo"},
            "_2": "bar",
            "_3": "three"
        }
        let pageData = Pagination(object, 1, 1);
        expect(pageData).to.deep.equal([{id: "_1", name: "foo"}]);
    });
});
