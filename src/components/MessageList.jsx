import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                'hello there how are You?',
                'Im fine, and You?'
            ]
        };
    }

     getMessages() {
        return this.state.messages.map((message, index) => {
            return (
                <Message message={message} />
            )
        });
    }

    render() {
        return (
            <div>{this.getMessages()}</div>
        );
    }
}

export default MessageList;