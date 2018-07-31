/**
 * Created by csalas on 7/30/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width:'70%',
        margin:'10px auto'
    },
});

const CustomTableCell = withStyles(theme => ({
    head: {
        background: 'linear-gradient(#23253e,#21254d)',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

let id = 0;

function createData(name, team, goals) {
    id += 1;
    return { id, name, team, goals};
}

const data = [
    createData('Cristian Vargas.', 'FAF', 10),
    createData('Carlos Salas.', 'FAF', 9),
];

function Stats(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="headline" component="h3">
                    Goals.
                </Typography>
                <Typography component="p">
                    Standings are updated at the completion of each match
                </Typography>
                <Table className={'statsTable'}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell numeric>#</CustomTableCell>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell numeric>Team</CustomTableCell>
                            <CustomTableCell>Goals</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                                <TableRow className={classes.row} key={n.id}>
                                    <CustomTableCell numeric>{n.id}</CustomTableCell>
                                    <CustomTableCell component="th" scope="row">
                                        {n.name}
                                    </CustomTableCell>
                                    <CustomTableCell numeric>{n.team}</CustomTableCell>
                                    <CustomTableCell numeric>{n.goals}</CustomTableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="headline" component="h3">
                    MVP.
                </Typography>
                <Typography component="p">
                    After of each match one player it will be selected as the MVP and win a point.
                </Typography>
                <Table className={'statsTable'}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell numeric>#</CustomTableCell>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell numeric>Team</CustomTableCell>
                            <CustomTableCell>Points</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                                <TableRow className={classes.row} key={'v'+n.id}>
                                    <CustomTableCell numeric>{n.id}</CustomTableCell>
                                    <CustomTableCell component="th" scope="row">
                                        {n.name}
                                    </CustomTableCell>
                                    <CustomTableCell numeric>{n.team}</CustomTableCell>
                                    <CustomTableCell numeric>{n.goals}</CustomTableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="headline" component="h3">
                   Red Cards.
                </Typography>
                <Typography component="p">
                    After each match the players with red card will be posted in this table.
                </Typography>
                <Table className={'statsTable'}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell numeric>#</CustomTableCell>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell numeric>Team</CustomTableCell>
                            <CustomTableCell>Payed</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                                <TableRow className={classes.row} key={'f'+n.id}>
                                    <CustomTableCell numeric>{n.id}</CustomTableCell>
                                    <CustomTableCell component="th" scope="row">
                                        {n.name}
                                    </CustomTableCell>
                                    <CustomTableCell numeric>{n.team}</CustomTableCell>
                                    <CustomTableCell numeric>{'NO'}</CustomTableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

Stats.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Stats);
