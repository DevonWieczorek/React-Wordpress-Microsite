import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";
import ErrorBoundary from '@Core/ErrorBoundary';
import Feed from '@Pages/Feed';
import Post from '@Pages/Post';
import NotFound from '@Pages/NotFound'
import {getCategories} from '@Actions';

class MainRouter extends Component{
    componentDidMount(){
        this.props.getCategories();
    }

    render(){
        return(
            <Switch>
                <Route exact path="/" key="homeFeed" component={() => {
                    return(
                        <ErrorBoundary errorContent={<NotFound />}>
                            <Feed />
                        </ErrorBoundary>
                    );
                }} />

                <Route exact path="/404" key="404page" component={NotFound} />

                <Route path="/categories/:category" key="category" component={() => {
                    return(
                        <ErrorBoundary errorContent={<NotFound />}>
                            <Feed />
                        </ErrorBoundary>
                    );
                }} />

                <Route path="/posts/:slug" key="posts" component={() => {
                    return(
                        <ErrorBoundary errorContent={<NotFound />}>
                            <Post />
                        </ErrorBoundary>
                    );
                }} />

                <Route key="404fallback" component={NotFound} />
            </Switch>
        );
    }
}

export default connect(null, {getCategories})(withRouter(MainRouter));
