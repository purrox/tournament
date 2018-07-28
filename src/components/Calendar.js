/**
 * Created by csalas on 7/24/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        background: 'linear-gradient(#23253e,#21254d)',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '80%',
        margin: '45px auto',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor:theme.palette.background.default
        },
    },
});

let id = 0;
function createData(name, date, hour) {
    id += 1;
    return { id, name, date, hour};
}

const data = [
    createData('Equipo 2 vs Equipo 3', 'Agosto 9', '5:00pm'),
    createData('Equipo 4 vs Equipo 1', 'Agosto 9', '6:00pm'),

    createData('Equipo 1 vs Equipo 2', 'Agosto 16', '5:00pm'),
    createData('Equipo 3 vs Equipo 4', 'Agosto 16', '6:00pm'),

    createData('Equipo 4 vs Equipo 2', 'Agosto 23', '5:00pm'),
    createData('Equipo 3 vs Equipo 1', 'Agosto 23', '6:00pm'),

    createData('Equipo 2 vs Equipo 1', 'Agosto 30', '5:00pm'),
    createData('Equipo 4 vs Equipo 3', 'Agosto 30', '6:00pm'),

    createData('Equipo 3 vs Equipo 1', 'September 6', '5:00pm'),
    createData('Equipo 2 vs Equipo 4', 'September 6', '6:00pm'),

    createData('Equipo 2 vs Equipo 4', 'September 13', '5:00pm'),
    createData('Equipo 1 vs Equipo 3', 'September 13', '6:00pm'),

];

function CalendarComponent(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Match</CustomTableCell>
                        <CustomTableCell>Date</CustomTableCell>
                        <CustomTableCell>Hour</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow className={classes.row} key={n.id}>
                                <CustomTableCell component="th" scope="row">
                                    {n.name}
                                </CustomTableCell>
                                <CustomTableCell>{n.date}</CustomTableCell>
                                <CustomTableCell>{n.hour}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

CalendarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalendarComponent)