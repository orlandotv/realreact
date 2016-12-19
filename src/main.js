import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./main.scss');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(<App />, document.getElementById('container'));
