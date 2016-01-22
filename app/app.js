import ReactDOM from 'react-dom';
import React from 'react';
import ArticleListItem from './components/ArticleListItem';

let style = require('./css/index.css');

ReactDOM.render(
    <ArticleListItem className={style.red}/>,
    document.getElementById('container')
);
