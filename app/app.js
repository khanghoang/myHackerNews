import ReactDOM from 'react-dom';
import React from 'react';
import ArticleListItem from './components/ArticleListItem';

let style = require('./css/index.css');

ReactDOM.render(
    (<div>
        <input type="text"></input>
        <ArticleListItem className={style.red}/>
    </div>),
    document.getElementById('container')
);
