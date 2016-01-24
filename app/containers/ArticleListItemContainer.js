import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ArticleListItem from '../components/ArticleListItem';
import * as FetchActions from '../actions/fetchData';
import React,{ Component } from 'react';

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(FetchActions, dispatch);
}

class ArticleListItemContainer extends Component {

    componentWillUpdate(newProps, newState) {
        console.log(newProps, newState);
    }

    componentDidMount() {
        console.log(this.props.data);
        this.props.fetchData();
    }

    render() {
        let items = this.props.data.map(item => <ArticleListItem text={item}/>);
        return (
            <div>
                {items}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListItemContainer)
