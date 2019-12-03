import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import HookStore from '@Core/HookStore';
import Header from './modules/Header';
import MainRouter from './routes/MainRouter';
import NotFound from './pages/NotFound';
import ErrorBoundary from '@Core/ErrorBoundary';
import Container from '@material-ui/core/Container';
import {globalStyles} from './styles/global';
import { withTheme, withStyles } from '@material-ui/core/styles';

class App extends Component{
    componentDidMount(){
        HookStore.doAction( 'init' );
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
