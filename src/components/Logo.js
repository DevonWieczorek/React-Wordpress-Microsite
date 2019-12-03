import React from 'react';
import ErrorBoundary from '@Core/ErrorBoundary';
import Box from '@material-ui/core/Box';
import { logoStyles } from '../styles/logo';

const Logo = () => {
    const n = process.env;
    const classes = logoStyles();

    return(
        <ErrorBoundary errorContent={<div id="logo">{n.REACT_APP_DEFAULT_LOGO_ALT}</div>}>
            <Box className={classes.root} display="flex" alignItems="center" justifyContent="center" p={1}>
                <a className={`home-button secondary, ${classes.holder}`} href="/">
                    <img
                        id="logo"
                        className={classes.logo}
                        src={n.REACT_APP_DEFAULT_LOGO_ALT}
                        alt={n.REACT_APP_DEFAULT_SITENAME}
                    />
                </a>
            </Box>
        </ErrorBoundary>
    );
}

export default Logo;
