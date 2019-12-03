import React from 'react';
import PropTypes from 'prop-types';
import {useStylesArrow} from '@Styles/arrowTooltip';
import Tooltip from '@material-ui/core/Tooltip';

const ArrowTooltip = (props) => {
    const { arrow, ...classes } = useStylesArrow();
    const [arrowRef, setArrowRef] = React.useState(null);

    return (
        <Tooltip
            classes={classes}
            PopperProps={{
                popperOptions: {
                    modifiers: {
                        arrow: {
                            enabled: Boolean(arrowRef),
                            element: arrowRef
                        }
                    }
                }
            }}
            {...props}
            title={
                <React.Fragment>
                    {props.title}
                    <span className={arrow} ref={setArrowRef}/>
                </React.Fragment>
            }
        />
    );
}

ArrowTooltip.propTypes = {
    title: PropTypes.node
};

export default ArrowTooltip;
