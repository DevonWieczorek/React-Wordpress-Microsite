import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import PostCard from '../components/PostCard';
import NotFound from '../pages/NotFound';
import ErrorBoundary from '../components/ErrorBoundary';
import Grid from '@material-ui/core/Grid';
import {getPosts, updateMeta} from '../actions';

class Feed extends Component{
    posts = () => {
        let _posts = [];
        let {api} = this.props;
        for(let i = 0; i < api.posts.length; i++){
            let p = api.posts[i];
            _posts.push(
                <Grid item xs={12} sm={6} md={3} key={p.id}>
                    <PostCard
                        id={p.id}
                        img={p.featured_image}
                        date={p.modified}
                        slug={p.slug}
                        title={p.title.rendered}
                        author={p.metadata.display_aname[0]}
                    />
                </Grid>
            );
        }
        return _posts;
    }

    updateMeta = () => {
        let meta = {};
        let n = process.env;
        let {location, api} = this.props;
        let paths = location.pathname.split('/');
        let path = paths[paths.length - 1] || null;

        if(api.categories[path]){
            let cat = api.categories[path];
            meta['title'] = `${cat.name} | ${n.REACT_APP_DEFAULT_SITENAME}`;
            meta['ogTitle'] = `${cat.name} | ${n.REACT_APP_DEFAULT_SITENAME}`;
            meta['description'] = cat.description;
            meta['ogDescription'] = cat.description;
            meta['keywords'] = cat.name;
        }
        else{
            meta['title'] = `Homepage | ${n.REACT_APP_DEFAULT_SITENAME}`;
            meta['ogTitle'] = `Homepage | ${n.REACT_APP_DEFAULT_SITENAME}`;
        }
        meta['ogURL'] = window.location.href;
        this.props.updateMeta(meta);
    }

    componentDidUpdate(prevProps, prevState){
        let {location, api} = this.props;

        if(prevProps.api.categories !== api.categories){
            let paths = location.pathname.split('/');
            let path = paths[paths.length - 1] || '';
            let categoryID = (api.categories[path]) ? api.categories[path].id : null;
            (categoryID) ? this.props.getPosts(categoryID) : this.props.getPosts();
            this.updateMeta();
        }
    }

    render(){
        return(
            <ErrorBoundary errorContent={<NotFound />}>
                <Grid container spacing={3}>
                    {this.posts()}
                </Grid>
            </ErrorBoundary>
        );
    }
}

const mapStateToProps = (state) => ({ api: state.api });

export default connect(mapStateToProps, {getPosts, updateMeta})(withRouter(Feed));
