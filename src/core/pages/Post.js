import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import HookStore from "@Core/HookStore";
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

    replaceContent = (content) => {
        // TSW lazyloads images, we don't
        content = content.replace(/data-src/g, 'src');

        // Clear any references to TSW
        content = content.replace(/the smart wallet/gi, process.env.REACT_APP_DEFAULT_SITENAME);

        // Replace contact-us with mailto: link
        let tswContactRegex = /(http:\/\/|https:\/\/)(thesmartwallet\.com\/contact-us)/gi;
        content = content.replace(tswContactRegex, `mailto:info@${window.location.host}`);

        // Update internal links
        let tswAnchorRegex = /(\S*?)href=(["'])(http:\/\/|https:\/\/)(thesmartwallet\.com)\1/gi;
        content = content.replace(tswAnchorRegex, `href="${window.location.host}/posts`);

        return content;
    }

    setInternalState = (post) => {
        this.setState({...this.state,
            id: post.id,
            title: post.title.rendered,
            author: post.author_name,
            date: cleanDate(post.modified),
            content: this.replaceContent(post.content.rendered)
        }, () => {this.updateMeta()})

        return post;
    }

    componentDidMount(){
        HookStore.addFilter( 'the_post', 'Post', this.setInternalState, 99999 );

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
                        showTooltip={(this.props.isPage) ? false : true}
                    />
                    <Siderail postID={this.state.id} />
                </Grid>
            </ErrorBoundary>
        );
    }
}

const mapStateToProps = (state) => ({ api: state.api });

export default connect(mapStateToProps, {getPostBySlug, updateMeta, getPageByID})(withRouter(Post));
