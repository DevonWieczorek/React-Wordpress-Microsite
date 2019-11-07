import React from 'react';
import DisclosureTooltip from '../components/DisclosureTooltip';
import ErrorBoundary from '../components/ErrorBoundary';
import NotFound from '../pages/NotFound';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { postContentStyles } from '../styles/postContent';

const PostContent = (props) => {
    const classes = postContentStyles();

    return(
        <ErrorBoundary errorContent={<NotFound />}>
            <Grid item xs={12} md={9} key={`g-${props.postID}`}>
                {props.content ?
                    <Card className={`card, ${classes.root}`} id={`post-${props.postID}`}>
                        <DisclosureTooltip/>

                        <h1 className="title" dangerouslySetInnerHTML={
                            { __html: props.title }
                        }></h1>

                        <div className="post-info">
                            {`by ${props.author} Updated on ${props.date}`}
                        </div>

                        <div className={`post-content, ${classes.content}`} dangerouslySetInnerHTML={
                            { __html: props.content }
                        } />
                    </Card>
                 : null}
            </Grid>
        </ErrorBoundary>
    );
}

export default PostContent;
