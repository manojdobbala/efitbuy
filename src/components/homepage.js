import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Card from './card';
import '../Homepage.css';
import * as bannerImage from '../img/efitbay1.jpg';


class LandingPage extends React.Component {

    render() {
        const banner = (<a href="#nowhere" className="banner">
                <img src={bannerImage} className="bannerImage"/>
                <h1 className="bannerText">Efitbay LLC</h1>
            </a>
        );

        return (
            <Grid container spacing={24}>
                <Hidden smDown>
                    <Grid item xs={12}>
                        {banner}
                    </Grid>
                </Hidden>
                <React.Fragment>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card></Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card></Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card></Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card></Card>
                    </Grid>
                </React.Fragment>
            </Grid>
        );
    }
}

export default LandingPage;
