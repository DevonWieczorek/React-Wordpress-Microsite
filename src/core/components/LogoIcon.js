import React from 'react';

const LogoIcon = (props) => {
    const n = process.env;
    return(
        <img className={props.className} src={n.REACT_APP_DEFAULT_LOGO_ICON} alt={n.REACT_APP_DEFAULT_TITLE} />
    );
}

export default LogoIcon;
