import { createMuiTheme } from '@material-ui/core/styles';

const n = process.env;

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: n.REACT_APP_DEFAULT_PRIMARY_THEME_COLOR
        },
        secondary: {
            main: n.REACT_APP_DEFAULT_SECONDARY_THEME_COLOR
        },
        text: {
            primary: n.REACT_APP_DEFAULT_BODY_TEXT_COLOR,
            secondary: n.REACT_APP_DEFAULT_HEADER_TEXT_COLOR
        },
        background: {
            level1: n.REACT_APP_DEFAULT_PRIMARY_THEME_COLOR,
            level2: n.REACT_APP_DEFAULT_SECONDARY_THEME_COLOR
        }
    },
    typography: {
        fontFamily: n.REACT_APP_DEFAULT_BODY_FONT,
        h1: {
            fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT
        },
        h2: {
            fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT
        },
        h3: {
            fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT
        },
        h4: {
            fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT
        },
        h5: {
            fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT
        },
        h6: {
            fontFamily: n.REACT_APP_DEFAULT_HEADER_FONT
        },
        body1: {
            fontFamily: n.REACT_APP_DEFAULT_BODY_FONT
        },
        body2: {
            fontFamily: n.REACT_APP_DEFAULT_BODY_FONT
        }
    }
});
