const n = process.env;

export const globalStyles = theme => ({
    '@global': {
        '.App': {
            paddingTop: '70px',
            fontFamily: n.REACT_APP_DEFAULT_BODY_FONT,
            color: n.REACT_APP_DEFAULT_BODY_TEXT_COLOR,
            '& h1': {
                fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT,
                color: n.REACT_APP_DEFAULT_BODY_TEXT_COLOR
            },
            '& h2': {
                fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT,
                color: n.REACT_APP_DEFAULT_BODY_TEXT_COLOR
            },
            '& h3': {
                fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT,
                color: n.REACT_APP_DEFAULT_BODY_TEXT_COLOR
            },
            '& h4': {
                fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT,
                color: n.REACT_APP_DEFAULT_BODY_TEXT_COLOR
            },
            '& h5': {
                fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT,
                color: n.REACT_APP_DEFAULT_BODY_TEXT_COLOR
            },
            '& h6': {
                fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT,
                color: n.REACT_APP_DEFAULT_BODY_TEXT_COLOR
            },
            '& a': {
                cursor: 'pointer',
                '&:hover': {
                    color: n.REACT_APP_DEFAULT_TERTIARY_THEME_COLOR
                },
                '&:not(.MuiTab-root)': {
                    color: n.REACT_APP_DEFAULT_SECONDARY_THEME_COLOR,
                    textDecoration: 'none',
                }
            },
            '& .MuiTabs-indicator': {
                backgroundColor: n.REACT_APP_DEFAULT_TERTIARY_THEME_COLOR
            }
        }
    }
});
