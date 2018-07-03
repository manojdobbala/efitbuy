/**
 * Created by manojdobbala on 7/2/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import * as bannerImage from '../img/fitbay_cropped.png';
import * as bannerImage1 from '../img/img_1.jpg';
import * as bannerImage2 from '../img/img_2.jpg';
import * as bannerImage3 from '../img/efitbay_japneese.jpg';
import * as bannerImage4 from '../img/img_4.jpg';
import * as bannerImage5 from '../img/img_5.jpg';
import * as bannerImage6 from '../img/img_6.jpg';


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class ScrollableTabsButtonForce extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Item One" icon={<PhoneIcon />} />
                        <Tab label="Item Two" icon={<FavoriteIcon />} />
                        <Tab label="Item Three" icon={<PersonPinIcon />} />
                        <Tab label="Item Four" icon={<HelpIcon />} />
                        <Tab label="Item Five" icon={<ShoppingBasket />} />
                        <Tab label="Item Six" icon={<ThumbDown />} />
                        <Tab label="Item Seven" icon={<ThumbUp />} />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><img src={bannerImage}  className="bannerImage"/></TabContainer>}
                {value === 1 && <TabContainer><img src={bannerImage1} className="bannerImage1"/></TabContainer>}
                {value === 2 && <TabContainer><img src={bannerImage2} className="bannerImage2"/></TabContainer>}
                {value === 3 && <TabContainer><img src={bannerImage3} className="bannerImage3"/></TabContainer>}
                {value === 4 && <TabContainer><img src={bannerImage4} className="bannerImage4"/></TabContainer>}
                {value === 5 && <TabContainer><img src={bannerImage5} className="bannerImage5"/></TabContainer>}
                {value === 6 && <TabContainer><img src={bannerImage6} className="bannerImage6"/></TabContainer>}
            </div>
        );
    }
}

ScrollableTabsButtonForce.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);
