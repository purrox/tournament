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
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;
function createData(name, wp, w, d, l,gp,gn, gd, pts) {
    id += 1;
    return { id, name, wp, w, d, l,gp,gn, gd, pts};
}

const data = [
    createData('Equipo 1', 0, 0, 0, 0,0, 0,0, 0),
    createData('Equipo 2',  0, 0, 0, 0,0, 0,0, 0),
    createData('Equipo 3',  0, 0, 0, 0,0, 0,0, 0),
    createData('Equipo 4',  0, 0, 0, 0,0, 0,0, 0),
];

function CustomizedTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell numeric>#</CustomTableCell>
                        <CustomTableCell>Team</CustomTableCell>
                        <CustomTableCell numeric>P</CustomTableCell>
                        <CustomTableCell numeric>W</CustomTableCell>
                        <CustomTableCell numeric>D</CustomTableCell>
                        <CustomTableCell numeric>L</CustomTableCell>
                        <CustomTableCell numeric>GP</CustomTableCell>
                        <CustomTableCell numeric>GN</CustomTableCell>
                        <CustomTableCell numeric>GD</CustomTableCell>
                        <CustomTableCell numeric>PTS</CustomTableCell>
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
                                <CustomTableCell numeric>{n.wp}</CustomTableCell>
                                <CustomTableCell numeric>{n.w}</CustomTableCell>
                                <CustomTableCell numeric>{n.d}</CustomTableCell>
                                <CustomTableCell numeric>{n.l}</CustomTableCell>
                                <CustomTableCell numeric>{n.gp}</CustomTableCell>
                                <CustomTableCell numeric>{n.gn}</CustomTableCell>
                                <CustomTableCell numeric>{n.gd}</CustomTableCell>
                                <CustomTableCell numeric>{n.pts}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);