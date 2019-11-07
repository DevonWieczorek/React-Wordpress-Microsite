import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import reducer from './reducers'
import Meta from './components/Meta';
import PluginStore from './components/PluginStore';
import {theme} from './styles/theme'
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
