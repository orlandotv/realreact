import React from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                leftAvatar={<Avatar src="http://i.forbesimg.com/media/lists/people/kevin-durant_416x416.jpg" />}
                >{this.props.message}
            </ListItem>
        );
    }
}

export default Message;