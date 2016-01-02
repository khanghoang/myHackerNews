import React, {Component} from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

class ArticleListItem extends Component {
    render() {
        return (
            <ListItem
                primaryText="Hello world"
                secondarytext={
                    <p> hello there </p>
                }
            />
        )
    }
}

export default ArticleListItem;
