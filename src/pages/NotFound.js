import React, {Component} from 'react';
import {connect} from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';
import LogoIcon from '../components/LogoIcon';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import {updateMeta, resetMeta} from '../actions';
import {notFoundStyles} from '../styles/notFound';
import { withStyles } from '@material-ui/core/styles';

class NotFound extends Component{
    componentDidMount(){
        this.props.resetMeta();

        let meta = {
            'title': '404 | Page not found',
            'ogTitle': '404 | Page not found',
            'description': 'This page does not exist. But we put our minds together to find more ways to make better money!',
            'ogDescription': 'This page does not exist. But we put our minds together to find more ways to make better money!'
        };
        this.props.updateMeta(meta);
    }

    render(){
        const { classes } = this.props;
        return(
            <ErrorBoundary errorContent={null}>
                <Grid container spacing={3}>
                    <Grid item xs={12} key={`404`}>
                        <Card className={`card, ${classes.root}`} id="not-found">
                            <LogoIcon className={classes.icon} />
                            <h1 className={`not-found-header ${classes.h1}`}>
                                Oops!
                            </h1>
                            <div className={`not-found-text ${classes.message}`}>
                                This page does not exist.<br/>
                                But we put our minds together to find<br/>
                                more ways to make better money!
                            </div>
                            <Link href="/" className={`go-home ${classes.button}`}>
                                {process.env.REACT_APP_DEFAULT_TITLE}
                            </Link>
                        </Card>
                    </Grid>
                </Grid>
            </ErrorBoundary>
        );
    }
}

export default connect(null, {updateMeta, resetMeta})(
    withStyles(notFoundStyles)(NotFound)
);
