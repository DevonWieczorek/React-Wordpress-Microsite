import { makeStyles } from '@material-ui/core/styles';

const n = process.env;

export const postContentStyles = makeStyles(theme => ({
    root: {
        maxWidth: '830px',
        padding: 0,
        '& a': {
            textDecoration: 'underline !important',
            '&:hover': {
                color: n.REACT_APP_DEFAULT_TERTIARY_THEME_COLOR
            }
        },
        '& #tbw-disclaimer': {
            position: 'relative',
            top: '-10px',
            width: '100%',
            maxWidth: '750px',
            marginBottom: '10px',
            padding: '14px 16px 14px 60px',
            backgroundColor: '#ebefee',
            float: 'none',
            clear: 'both',
            '& > img': {
                position: 'absolute',
                top: '50%',
                left: '15px',
                float: 'left',
                maxWidth: '35px',
                margin: 0,
                transform: 'translateY(-50%)',
                '&.down': {
                    marginTop: '20px'
                }
            },
            '& > span': {
                float: 'left',
                width: '100%',
                paddingTop: '2px',
                textAlign: 'right',
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: 500,
                color: '#9a9a9a',
                '& b': {
                    display: 'block',
                    textAlign: 'right',
                    textTransform: 'uppercase',
                    fontSize: '13px',
                    color: '#9a9a9a'
                }
            },
            '& .clear': {
                clear: 'both'
            }
        },
        '& button.btn-default': {
            width: 'auto',
            maxWidth: '100%',
            padding: '20px',
            background: n.REACT_APP_DEFAULT_PRIMARY_THEME_COLOR,
            fontSize: '1rem',
            lineHeight: 1.6,
            color: theme.palette.primary.contrastText,
            cursor: 'pointer',
            [theme.breakpoints.up('md')]: {
                fontSize: '1.125rem',
                lineHeight: 1.8
            }
        },
        [theme.breakpoints.up('md')]: {
            padding: '15px'
        }
    },
    content: {
        fontSize: '1rem',
        lineHeight: 1.6,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
            lineHeight: 1.8
        },
        '& a': {
            '&:hover': {
                color: n.REACT_APP_DEFAULT_TERTIARY_THEME_COLOR
            }
        },
        '& p': {
            marginBottom: '1rem'
        },
        '& h3': {
            marginTop: '2rem',
            marginBottom: '1.625rem',
            fontSize: '1.4375rem',
            lineHeight: 1.3,
            [theme.breakpoints.up('md')]: {
                marginTop: '3rem'
            }
        },
        '& figure': {
            maxWidth: '100%',
            height: 'auto',
            margin: '15px 0px',
            '&.size-full': {
                marginBottom: 0
            }
        },
        '& img': {
            maxWidth: '100%',
            height: 'auto',
            margin: '15px 0px',
            '&.size-full': {
                marginBottom: 0
            }
        }
    },
    tooltipLink: {
        padding: 0,
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
    },
    title: {
        fontSize: '1.75rem',
        lineHeight: 1.2,
        fontWeight: 700
    },
    info: {
        '& > span': {
            display: 'block',
            fontWeight: 600,
            [theme.breakpoints.up('sm')]: {
                display: 'inline-block'
            }
        }
    },
    date: {
        [theme.breakpoints.up('sm')]: {
            float: 'right'
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: '50px'
        }
    }
}));
