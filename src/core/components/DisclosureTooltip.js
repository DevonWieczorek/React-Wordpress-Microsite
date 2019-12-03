import React from 'react';
import ArrowTooltip from '@Components/ArrowTooltip';
import ErrorBoundary from '@Core/ErrorBoundary';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { postContentStyles } from '@Styles/postContent';

const DisclosureTooltip = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const toggleToolTopOpen = () => {
        setOpen(!open);
    }

    const disclosure = () => (
        <div className="disclosure-lightbox">
        <h2>Our commitment to you</h2>
        <p>{process.env.REACT_APP_DEFAULT_SITENAME} is an independent publisher dedicated to delivering our readers simple solutions in personal finance. Its content (including articles and tools) is provided for free and for informational purposes.</p>
        <p>As information can change quickly, we cannot guarantee the accuracy of the information we present on a daily basis on previously published posts, nor guarantee the applicability of the content to your individual circumstances. However, we do strive to provide accurate, reliable information.</p>
        <p>We believe that anyone can take control of their financial destiny and that there is everyday magic in simple, honest advice. We know our readers expect nothing less.</p>
        <p>We also believe in transparency and we partner with brands (many of them are free to use) that have products and services that will help our readers. Because of these partnerships, some of our links on the site are “affiliate links,” which is how our partner brands compensate us for your attention. If you click on one of those links and purchase an item, sign up for a promotion, download an app, or complete a required action, The Smart Wallet may receive a commission.</p>
        <p>Anytime we partner with a brand, we make it clearly known. For instance, here’s <a href="/posts/amazon-buys-to-make-a-hygge-home-yours" target="_blank">an example</a> where there’s a gray disclosure box right underneath the main image and before the body text.</p>
        <p>If there’s no disclosure in that spot in articles, then we didn’t earn money from that content.</p>
        <p>Why? Because we believe our content should help you first and foremost, we will cover brands outside our partnerships because we feel their services or products truly benefit our readers.</p>
        <p>Though our partnerships may influence where those products appear on the site, they in no way affect our recommendations or advice, which are grounded in intensive research. What’s more, our partners cannot pay us to guarantee favorable reviews of their products or services.</p>
        </div>
    );

    const classes = postContentStyles();

    return(
        <ErrorBoundary errorContent={null}>
            <Grid item>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div>
                        <ArrowTooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title={disclosure()}
                        >
                            <Button className={classes.tooltipLink} onClick={toggleToolTopOpen}>
                                Sponsored Content Disclosure
                            </Button>
                        </ArrowTooltip>
                    </div>
                </ClickAwayListener>
            </Grid>
        </ErrorBoundary>
    );
}

export default DisclosureTooltip;
