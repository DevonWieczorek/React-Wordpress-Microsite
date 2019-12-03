import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from '@Root/App';
import reducer from '@Root/reducers'
import Meta from '@Components/Meta';
import PluginStore from '@Root/PluginStore';
import DependencyStore from '@Root/DependencyStore';
import {theme} from '@Root/styles/theme'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
const rootElement = document.getElementById('root');

let _app = (
    <Provider store={store}>
        <PluginStore>
            <Router>
                <ThemeProvider theme={theme}>
                    <Meta />
                    <CssBaseline />
                    <App />
                    <DependencyStore />
                </ThemeProvider>
            </Router>
        </PluginStore>
    </Provider>
);

if(rootElement.hasChildNodes()){
    ReactDOM.hydrate(_app, rootElement);
}
else{
    ReactDOM.render(_app, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
