import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";
import HookStore from '@Core/HookStore';
import ErrorBoundary from '@Core/ErrorBoundary';
import Feed from '@Pages/Feed';
import Post from '@Pages/Post';
import NotFound from '@Pages/NotFound'
import {getCategories} from '@Actions';

class MainRouter extends Component{
    mainRoutes = [
        <Route exact path="/" key="homeFeed" component={() => (
            <ErrorBoundary errorContent={<NotFound />}>
                <Feed />
            </ErrorBoundary>
        )} />,

        <Route path="/terms" key="terms" component={() => (
            <ErrorBoundary errorContent={<NotFound />}>
                <Post isPage={true} slug={process.env.REACT_APP_DEFAULT_TERMS_CONDITIONS_ID} />
            </ErrorBoundary>
        )} />,

        <Route path="/privacy-policy" key="privacy-policy" component={() => (
            <ErrorBoundary errorContent={<NotFound />}>
                <Post isPage={true} slug={process.env.REACT_APP_DEFAULT_PRIVACY_POLICY_ID} />
            </ErrorBoundary>
        )} />,

        <Route exact path="/404" key="404page" component={NotFound} />,

        <Route path="/categories/:category" key="category" component={() => (
            <ErrorBoundary errorContent={<NotFound />}>
                <Feed />
            </ErrorBoundary>
        )} />,

        <Route path="/posts/:slug" key="posts" component={() => (
            <ErrorBoundary errorContent={<NotFound />}>
                <Post />
            </ErrorBoundary>
        )} />,

        <Route key="404fallback" component={NotFound} />
    ];

    componentDidMount(){
        this.props.getCategories();
    }

    render(){
        return(
            <Switch>{HookStore.applyFilters('main_router', this.mainRoutes)}</Switch>
        );
    }
}

export default connect(null, {getCategories})(withRouter(MainRouter));
