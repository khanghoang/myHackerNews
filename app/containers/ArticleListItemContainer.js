import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ArticleListItem from '../components/ArticleListItem';
import * as FetchActions from '../actions/fetchData';
import React,{ Component } from 'react';

function mapStateToProps(state) {
    return {
        stories: state.currentPage.pageData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(FetchActions, dispatch);
}

class ArticleListItemContainer extends Component {

    constructor() {
        super();
        this.state = {
            currentPage: {
                pageData: []
            }
        }
    }

    componentWillUpdate(newProps, newState) {
        console.log(newProps, newState);
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {

        if(!this.props.stories) return null;

        let items = _.values(this.props.stories).map(item => <ArticleListItem item={item}/>);
        return (
            <div>
                {items}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListItemContainer)
