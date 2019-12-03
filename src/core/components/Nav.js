import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import NavItem from '@Components/NavItem';
import LogoIcon from '@Components/LogoIcon';
import ErrorBoundary from '@Core/ErrorBoundary';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import {navStyles} from '@Styles/nav';
import { withStyles } from '@material-ui/core/styles';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
            items: props.api.categories
        }
    }

    tabs = (classes) => {
        // Use hidden element to handle homepage
        let tabsArr = [
            <NavItem id={`simple-tab-0`} label="Home" href="/" key={0} tabIndex={0} value={0} selected={this.state.activeTab === 0} style={{display: "none"}} />
        ];

        for(let i in Object.keys(this.state.items)){
            let idx = Object.keys(this.state.items)[i];
            let item = this.state.items[idx];
            tabsArr.push(
                <NavItem className={classes.nav} propID={`simple-tab-${item.id}`} label={item.name} href={`/categories/${item.slug}`} key={item.id} tabIndex={item.id} value={item.id} selected={this.state.activeTab === item.id} />
            );
        }
        return tabsArr;
    }


    componentDidUpdate(prevProps, prevState){
        let {location, api} = this.props;

        if(prevProps.api.categories !== api.categories){
            let paths = location.pathname.split('/');
            let path = paths[paths.length - 1] || '';
            let categoryID = (api.categories[path]) ? api.categories[path].id : 0;
            this.setState({...this.state, activeTab: categoryID, items: api.categories });
        }
    }


    render(){
        const { classes } = this.props;
        return(
            <ErrorBoundary errorContent={null}>
                <Hidden mdUp>
                    <Grid container spacing={1}>
                        <LogoIcon className={classes.icon} />
                        {this.tabs(classes)}
                    </Grid>
                </Hidden>
                <Hidden mdDown>
                    <Tabs className={classes.root} variant="fullWidth" value={this.state.activeTab} aria-label="nav tabs">
                        {this.tabs(classes)}
                    </Tabs>
                </Hidden>
            </ErrorBoundary>
        );
    }
}

const mapStateToProps = (state) => ({ api: state.api });

export default connect(mapStateToProps, {})(
    withRouter(
        withStyles(navStyles)(Nav)
    )
);
