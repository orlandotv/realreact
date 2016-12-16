import React from 'react';

class App extends React.Component {
    constructor() {
        super();
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
                <p key={index}>{message}</p>
            )
        });
    }

    render() {
        return (
            <div>{this.getMessages()}</div>
        );
    }
}

export default App;
