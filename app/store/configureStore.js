import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default function configureStore(intialState) {
    const store = createStoreWithMiddleware(reducer, intialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers')
            store.replaceReducer(nextReducer)
        })
    }

    return store;
}
