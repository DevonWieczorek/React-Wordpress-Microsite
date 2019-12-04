import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { footerStyles } from '@Styles/footer';

const Footer = () => {
    let n = process.env;
    const classes = footerStyles();

    return(
        <Box className={classes.root} display="flex" alignItems="center" justifyContent="center" p={1}>
            {(n.REACT_APP_DEFAULT_PRIVACY_POLICY_ID) ?
                <Link className={classes.link} href={`/privacy-policy`}>
                    Privacy Policy
                </Link>
            : null}

            {(n.REACT_APP_DEFAULT_TERMS_CONDITIONS_ID) ?
                <Link className={classes.link} href={`/terms`}>
                    Terms &amp; Conditions
                </Link>
            : null}
        </Box>
    );
}

export default Footer;
