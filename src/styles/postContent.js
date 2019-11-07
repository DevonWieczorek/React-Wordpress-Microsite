import { makeStyles } from '@material-ui/core/styles';

const n = process.env;

export const postContentStyles = makeStyles(theme => ({
    root: {
        padding: '10px',
        '& a': {
            '&:hover': {
                color: n.REACT_APP_DEFAULT_TERTIARY_THEME_COLOR
            }
        },
        [theme.breakpoints.up('md')]: {
            padding: '15px'
        }
    },
    content: {
        '& a': {
            '&:hover': {
                color: n.REACT_APP_DEFAULT_TERTIARY_THEME_COLOR
            }
        },
        '& figure': {
            maxWidth: '100%',
            height: 'auto',
            margin: '15px 0px'
        },
        '& img': {
            maxWidth: '100%',
            height: 'auto',
            margin: '15px 0px'
        }
    },
    disclosure: {
        textDecoration: 'underline',
        color: n.REACT_APP_DEFAULT_BODY_TEXT_COLOR,
        cursor: 'pointer'
    },
    tooltip: {
        position: 'relative',
        opacity: 1,
        zIndex: 999,
        background: 'rgba(97, 97, 97, 1)',
        backgroundColor: 'rgba(97, 97, 97, 1) !important',
        '& .disclosure-lightbox > h2': {
            color: theme.palette.common.white
        },
        '& disclosure-lightbox p a:link': {
            color: n.REACT_APP_DEFAULT_TERTIARY_THEME_COLOR
        }
    }
}));
