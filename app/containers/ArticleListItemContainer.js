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
    componentDidMount() {
        console.log(this.props);
        this.props.fetchData();
    }

    render() {
        let items = this.props.data.map(item => <ArticleListItem />);
        return (
            <div>
                {items}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListItemContainer)
