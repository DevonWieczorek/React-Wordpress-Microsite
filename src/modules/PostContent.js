import React from 'react';
import DisclosureTooltip from '../components/DisclosureTooltip';
import ErrorBoundary from '../components/ErrorBoundary';
import NotFound from '../pages/NotFound';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { postContentStyles } from '../styles/postContent';

const PostContent = (props) => {
    const classes = postContentStyles();

    return(
        <ErrorBoundary errorContent={<NotFound />}>
            <Grid item xs={12} md={9} key={`g-${props.postID}`}>
                {props.content ?
                    <Box component="div" className={`card, ${classes.root}`} id={`post-${props.postID}`}>
                        <DisclosureTooltip/>

                        <h1 className={`title, ${classes.title}`} dangerouslySetInnerHTML={
                            { __html: props.title }
                        }></h1>

                    <div className={`post-info, ${classes.info}`}>
                            <span className="author">
                                by <span className="author-name">{props.author}</span>
                            </span>
                            <span className={`post-date, ${classes.date}`}>
                                {`Updated on ${props.date}`}
                            </span>
                        </div>

                        <div className={`post-content, ${classes.content}`} dangerouslySetInnerHTML={
                            { __html: props.content }
                        } />
                    </Box>
                 : null}
            </Grid>
        </ErrorBoundary>
    );
}

export default PostContent;
