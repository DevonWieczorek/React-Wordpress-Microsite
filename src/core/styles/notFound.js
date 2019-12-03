const n = process.env;

export const notFoundStyles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        [theme.breakpoints.up('md')]: {
            padding: '15px'
        }
    },
    icon: {
        display: 'block',
        width: '30%',
        margin: '15px auto',
        [theme.breakpoints.up('md')]: {
            width: '10%'
        }
    },
    h1: {
        '&.not-found-header': {
            margin: '15px auto',
            fontSize: '33px',
            lineHeight: '45px',
            fontWeight: 900,
            fontStyle: 'italic',
            color: n.REACT_APP_DEFAULT_TERTIARY_THEME_COLOR,
            [theme.breakpoints.up('md')]: {
                margin: '25px auto',
                fontSize: '44px'
            }
        }
    },
    message: {
        textAlign: 'center',
        fontSize: '16px',
        [theme.breakpoints.up('md')]: {
            fontSize: '22px'
        }
    },
    button: {
        display: 'block',
        width: '85%',
        margin: '25px auto 50px',
        borderRadius: '50px',
        background: n.REACT_APP_DEFAULT_TERTIARY_THEME_COLOR,
        textAlign: 'center',
        fontSize: '20px',
        lineHeight: '60px',
        fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT,
        fontWeight: 600,
        textTransform: 'lowercase',
        color: `${theme.palette.common.white} !important`,
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
            width: '350px',
            margin: '35px auto 100px'
        }
    }
});
