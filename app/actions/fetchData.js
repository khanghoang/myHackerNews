export const FETCH_DATA = 'FETCH_DATA';

export function fetchData() {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: FETCH_DATA,
                data: [
                    'hey',
                    'ho',
                    'lets go'
                ]
            })
        }, 1000)
    }
}

