import ReactDOM from 'react-dom';
import React from 'react';
import ArticleListItemContainer from './containers/ArticleListItemContainer';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

let style = require('./css/index.css');
const store = configureStore();

console.log(store);

console.log('aaaaa');

ReactDOM.render(
    (<Provider store={store}>
        <ArticleListItemContainer className={style.red}/>
    </Provider>),
    document.getElementById('container')
);
