import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Card from './card';

const styles = {
    card: {
        height: '231px',
        perspective: '600px',
    }
};

class LandingPage extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>
                <React.Fragment>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card></Card>
                    </Grid>
                </React.Fragment>
            </Grid>
        );
    }
}

export default LandingPage;
