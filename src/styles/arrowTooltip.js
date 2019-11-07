import { makeStyles } from '@material-ui/core/styles';

const arrowGenerator = (color) => {
    return {
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 30,
            marginTop: '-0.95em',
            width: '2em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${color} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: '2px',
            left: '15px',
            marginBottom: '-0.95em',
            width: '2em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${color} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.95em',
            height: '2em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${color} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.95em',
            height: '2em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${color}`,
            },
        },
    };
}

export const useStylesArrow = makeStyles(theme => ({
    tooltip: {
        position: 'relative',
        opacity: 1,
        zIndex: 999,
        background: 'rgba(97, 97, 97, 1)',
        backgroundColor: 'rgba(97, 97, 97, 1) !important',
        '& .disclosure-lightbox > h2': {
            color: '#fff'
        },
        '& disclosure-lightbox p a:link': {
            color: process.env.REACT_APP_DEFAULT_TERTIARY_THEME_COLOR
        }
    },
    arrow: {
        position: 'absolute',
        fontSize: 6,
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
    popper: arrowGenerator(theme.palette.grey[700]),
}));
