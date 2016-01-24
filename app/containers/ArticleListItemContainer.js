import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ArticleListItem from '../components/ArticleListItem';
import * as FetchActions from '../actions/fetchData';
import React,{ Component } from 'react';

function mapStateToProps(state) {
    return {
        stories: state.data.stories
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(FetchActions, dispatch);
}

class ArticleListItemContainer extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                stories: {}
            }
        }
    }

    componentWillUpdate(newProps, newState) {
        console.log(newProps, newState);
    }

    componentDidMount() {
        console.log(this.props.data);
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
