import React, {Component} from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

class ArticleListItem extends Component {
    render() {
        return (
            <ListItem
                className={this.props.className}
                primaryText={this.props.item.id}
                secondarytext={
                    <p>{this.props.item.id}</p>
                }
            />
        )
    }
}

export default ArticleListItem;
