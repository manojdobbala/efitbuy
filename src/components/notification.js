/**
 * Created by manojdobbala on 6/30/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        overflow: 'hidden',
        padding: `0 ${theme.spacing.unit * 3}px`,
    },
    wrapper: {
        maxWidth: 400,
    },
    paper: {
        margin: theme.spacing.unit,
        padding: theme.spacing.unit * 2,
    },
});

function AutoGridNoWrap(props) {
    const { classes } = props;
    const message = `Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. `;

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Paper className={classes.paper}>
                    <Grid container spacing={24}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>{message}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
}

AutoGridNoWrap.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);
