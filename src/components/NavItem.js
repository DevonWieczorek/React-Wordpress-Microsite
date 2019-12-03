import React from 'react';
import ErrorBoundary from '@Core/ErrorBoundary';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';

const NavItem = (props) => {
    let {propID, label, href, tabIndex, value, selected, style, className} = props;

    return(
        <ErrorBoundary errorContent={null}>
            <Hidden mdUp>
                <Grid item xs={12}>
                    <Link className={className} id={propID} href={href} style={style}>{label}</Link>
                </Grid>
            </Hidden>
            <Hidden mdDown>
                <Tab component="a" id={propID} className={className} label={label} href={href} tabIndex={tabIndex} value={value} aria-selected={selected} style={style} />
            </Hidden>
        </ErrorBoundary>
    );
}

export default NavItem;
