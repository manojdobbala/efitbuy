/**
 * Created by manojdobbala on 6/30/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function SimpleCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        Welcome
                    </Typography>
                    <Typography variant="headline" component="h2">
                        to efitbay breakfast recepies
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        next gen nutrition
                    </Typography>
                    <Typography component="p">
                        well meaning and kindly.<br />
                        {'"nutrition and fitness in everything"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
