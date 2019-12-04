import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import HookStore from '@Core/HookStore';
import Header from '@Modules/Header';
import MainRouter from '@Routes/MainRouter';
import NotFound from '@Pages/NotFound';
import ErrorBoundary from '@Core/ErrorBoundary';
import Container from '@material-ui/core/Container';
import {globalStyles} from '@Core/styles/global';
import { withTheme, withStyles } from '@material-ui/core/styles';

class App extends Component{
    componentDidMount(){
        HookStore.doAction( 'init' );

        window.addEventListener('load', () => {
            HookStore.doAction( 'window_loaded' );
        });
    }

    render(){
        return (
            <ErrorBoundary errorContent={<NotFound />}>
                <Container className="App">
                    <Header />
                    <MainRouter />
                </Container>
            </ErrorBoundary>
        );
    }
}

export default connect(null, {})(
    withRouter(
        withTheme(
            withStyles(globalStyles)(App)
        )
    )
);
