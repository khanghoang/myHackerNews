import ReactDOM from 'react-dom';
import React from 'react';
import ArticleListItemContainer from './containers/ArticleListItemContainer';
import ArticleListItem from './components/ArticleListItem';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

let style = require('./css/index.css');
const store = configureStore();

ReactDOM.render(
    (<Provider store={store}>
        <ArticleListItemContainer className={style.red}/>
    </Provider>),
    document.getElementById('container')
);
