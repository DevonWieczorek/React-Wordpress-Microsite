import React from 'react';
import {cleanDate, decodeHTMLEntity} from '../utils/misc';
import ErrorBoundary from '@Core/ErrorBoundary';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {postCardStyles} from '../styles/postCard';

const PostCard = (props) => {
    const classes = postCardStyles();
    const {id, img, date, slug, title, author} = props;

    return(
        <ErrorBoundary errorContent={null}>
            <Card className={`card ${classes.root}`} id={`post-${id}`}>
                <Link className={`card ${classes.link}`} href={`/posts/${slug}`}>
                    <CardMedia component="img" className="media" image={img} title={title} />
                    <CardContent>
                        <div className={`title ${classes.title}`}>{decodeHTMLEntity(title)}</div>
                        <div className={`post-info ${classes.info}`}>
                            <span className="author">{author}</span>
                            &nbsp;&middot;&nbsp;
                            <span className="post-date">{cleanDate(date)}</span>
                        </div>
                    </CardContent>
                </Link>
            </Card>
        </ErrorBoundary>
    );
}

export default PostCard;
