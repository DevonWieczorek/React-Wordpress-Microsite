import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import NotFound from '@Pages/NotFound';
import PostContent from '@Modules/PostContent';
import Siderail from '@Modules/Siderail';
import ErrorBoundary from '@Core/ErrorBoundary';
import {getPostBySlug, updateMeta, getPageByID} from '@Actions';
import {cleanDate, stripHTML, decodeHTMLEntity} from '@Utils/misc';
import Grid from '@material-ui/core/Grid';

class Post extends Component{
    state = {
        id: 0,
        title: '',
        author: '',
        date: '',
        content: null,
        payload: {}
    }

    updateMeta = () => {
        let meta = {};
        let {api} = this.props;
        let p = api.activePost;

        meta['title'] = this.state.title || p.title.rendered;
        meta['ogTitle'] = this.state.title || p.title.rendered;
        meta['description'] = decodeHTMLEntity(stripHTML(p.excerpt.rendered));
        meta['ogDescription'] = decodeHTMLEntity(stripHTML(p.excerpt.rendered));
        meta['keywords'] = Object.keys(api.categories).join(',');
        meta['ogURL'] = window.location.href;
        meta['ogImage'] = p.featured_image;
        this.props.updateMeta(meta);
    }

    componentDidUpdate(prevProps, prevState){
        let {api} = this.props;
        if(prevProps.api.activePost !== api.activePost){
            // TSW lazyloads images
            let content = api.activePost.content.rendered.replace(/data-src/g, 'src');
            // Clear any references to TSW
            content = content.replace(/the smart wallet/gi, process.env.REACT_APP_DEFAULT_SITENAME);
            // Update internal links
            let tswAnchorRegex = /(\S*?)href=(["'])(http:\/\/|https:\/\/)(thesmartwallet\.com)\1/gi;
            content = content.replace(tswAnchorRegex, `href="${window.location.host}/posts`);

            this.setState({...this.state,
                id: api.activePost.id,
                title: api.activePost.title.rendered,
                author: api.activePost.author_name,
                date: cleanDate(api.activePost.modified),
                content: content
            }, () => {this.updateMeta()})
        }
    }

    componentDidMount(){
        let {location, isPage} = this.props;
        if(isPage){
            this.props.getPageByID(this.props.slug);
        }
        else{
            let paths = location.pathname.split('/');
            let slug = paths[paths.length - 1] || '';
            this.props.getPostBySlug(slug);
        }
    }

    render(){
        return(
            <ErrorBoundary errorContent={<NotFound />}>
                <Grid container spacing={3}>
                    <PostContent
                        postID={this.state.id}
                        title={this.state.title}
                        author={this.state.author}
                        date={this.state.date}
                        content={this.state.content}
                    />
                    <Siderail postID={this.state.id} />
                </Grid>
            </ErrorBoundary>
        );
    }
}

const mapStateToProps = (state) => ({ api: state.api });

export default connect(mapStateToProps, {getPostBySlug, updateMeta, getPageByID})(withRouter(Post));
