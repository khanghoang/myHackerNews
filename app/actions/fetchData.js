import Firebase, {FirebaseSimpleLogin} from "firebase";
export const FETCH_DATA = 'FETCH_DATA';

// const hackerNews = new Firebase('https://hacker-news.firebaseio.com');
const hackerNews = new Firebase('https://hacker-news.firebaseio.com');

export function fetchData() {
    return dispatch => {
        hackerNews
        .child('/v0/topstories')
        .on('value', (results) => {
            console.log(results.val());
            dispatch({
                type: FETCH_DATA,
                data: results.val()
            })
        }, (err) => {
            console.log(err);
        })
    }
}

