import React, {Component} from 'react';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import ErrorBoundary from '../components/ErrorBoundary';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import {navStyles} from '../styles/nav';
import { withStyles } from '@material-ui/core/styles';

class Header extends Component{
    state = {open: false}

    toggleDrawer = () => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({ ...this.state, open: !this.state.open });
    };

    render(){
        const { classes } = this.props;
        return(
            <ErrorBoundary errorContent={null}>
                <AppBar position="fixed">
                    <Grid container spacing={3}>
                        <Grid item xs={9} sm={4} md={3} lg={5} xl={6}><Logo /></Grid>

                        <Hidden mdDown>
                            <Grid item md={4} lg={6} xl={4}>
                                <Nav />
                            </Grid>
                        </Hidden>

                        <Hidden mdUp>
                            <Grid item xs={3} sm={8}>
                                <Box className={classes.hamburgerHolder} p={1}>
                                    <Button className={classes.hamburgerHolder} onClick={this.toggleDrawer()}>
                                        <MenuIcon className={classes.hamburger} />
                                    </Button>
                                </Box>
                            </Grid>
                            <Drawer anchor="left" open={this.state.open} onClose={this.toggleDrawer()}>
                                <Nav />
                            </Drawer>
                        </Hidden>
                    </Grid>
                </AppBar>
            </ErrorBoundary>
        );
    }
}

export default withStyles(navStyles)(Header);
