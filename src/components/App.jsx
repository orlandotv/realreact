import React from 'react';
import {blue500, blue700, blue100, pink400} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MessageList from './MessageList.jsx';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: blue100,
        accent1Color: pink400
    },
    fontFamily: 'Roboto, sans-serif',
    appBar: {
        height: 50
    }
});

class App extends React.Component {
    constructor() {
        super();
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: getMuiTheme(muiTheme)
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <AppBar title="Awesome Chat App" />
                </MuiThemeProvider>
                <MessageList />
            </div>
        );
    }

}

export default App;
