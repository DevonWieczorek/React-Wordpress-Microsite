import { makeStyles } from '@material-ui/core/styles';

export const logoStyles = makeStyles(theme => ({
    root: {
        paddingLeft: 0,
        [theme.breakpoints.up('md')]: {
            padding: 'inherit'
        }
    },
    holder: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    logo: {
        maxWidth: '100%',
        maxHeight: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: '5px',
            paddingLeft: '20px'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '20px'
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: 0,
            paddingLeft: '35px'
        },
        [theme.breakpoints.up('xl')]: {
            paddingLeft: 0
        }
    }
}));
