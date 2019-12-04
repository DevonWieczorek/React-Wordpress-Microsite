export const navStyles = theme => ({
    root: {
        justifyContent: 'flex-end',
        height: '100%',
        '& .MuiTabs-flexContainer': {
            height: '100%',
            justifyContent: 'flex-end',
            '& a': {
                opacity: 1
            }
        },
        [theme.breakpoints.up('lg')]: {
            paddingRight: '50px'
        },
        [theme.breakpoints.up('xl')]: {
            paddingRight: 0
        }
    },
    hamburgerHolder: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    hamburger: {
        color: theme.palette.common.white
    },
    icon: {
        display: 'block',
        width: '60px',
        margin: '60px auto 20px'
    },
    nav: {
        [theme.breakpoints.down('md')]: {
            display: 'block',
            padding: '5px 0px',
            textAlign: 'center',
            textDecoration: 'underline'
        }
    }
});
