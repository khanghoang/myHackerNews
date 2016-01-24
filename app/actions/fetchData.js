import Firebase, {FirebaseSimpleLogin} from "firebase";
import {normalize, Schema, arrayOf} from 'normalizr';
export const FETCH_DATA = 'FETCH_DATA';

// const hackerNews = new Firebase('https://hacker-news.firebaseio.com');
const hackerNews = new Firebase('https://hacker-news.firebaseio.com');

const storySchema = new Schema('stories');

export function fetchData() {
    return dispatch => {
        hackerNews
        .child('/v0/topstories')
        .on('value', (results) => {
            console.log(results.val());
            const stories = results.val().map(id => {
                return {
                    id: id
                }
            })

            const data = normalize(stories, arrayOf(storySchema));

            console.log('data', data);

            dispatch({
                type: FETCH_DATA,
                data: data
            })
        }, (err) => {
            console.log(err);
        })
    }
}

