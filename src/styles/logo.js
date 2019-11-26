import { makeStyles } from '@material-ui/core/styles';

export const logoStyles = makeStyles(theme => ({
    holder: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    logo: {
        maxWidth: '100%',
        maxHeight: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: '5px',
            paddingLeft: '12px'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '20px'
        }
    }
}));
