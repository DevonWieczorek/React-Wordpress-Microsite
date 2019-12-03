import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const postCardStyles = makeStyles(theme => ({
    root: {
        marginBottom: '10px',
        '&:hover': {
            textDecoration: 'none'
        },
        '& > a': {
            '&:hover': {
                textDecoration: 'none'
            }
        }
    },
    link: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none'
        }
    },
    title: {
        marginBottom: '5px',
        textDecoration: 'none',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&:hover': {
            textDecoration: 'underline',
            color: process.env.REACT_APP_DEFAULT_TERTIARY_THEME_COLOR
        },
        [theme.breakpoints.up('sm')]: {
            height: 'calc((1.3em * 2) + 5px)'
        }
    },
    info: {
        color: grey[700]
    }
}));
