import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Box from '@material-ui/core/Box';

const Logo = () => {
    const n = process.env;
    return(
        <ErrorBoundary errorContent={<div id="logo">{n.REACT_APP_DEFAULT_LOGO_ALT}</div>}>
            <Box display="flex" alignItems="center" justifyContent="center" p={1}>
                <a className="home-button secondary" href="/">
                    <img id="logo" src={n.REACT_APP_DEFAULT_LOGO_ALT} alt={n.REACT_APP_DEFAULT_SITENAME}/>
                </a>
            </Box>
        </ErrorBoundary>
    );
}

export default Logo;
