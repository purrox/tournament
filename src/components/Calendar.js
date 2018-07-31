/**
 * Created by csalas on 7/24/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SnackbarContent from '@material-ui/core/SnackbarContent';

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
            backgroundColor: theme.palette.background.default
        },
    },
});

let id = 0;
function createData(name, date, hour) {
    id += 1;
    return {id, name, date, hour};
}

const data = [
    createData('Chicharrones FC vs Equipo 3', 'Agosto 09', '5:00 pm'),
    createData('Mean Machine vs Kronos', 'Agosto 09', '6:00 pm'),

    createData('Kronos vs Chicharrones FC', 'Agosto 16', '5:00 pm'),
    createData('Equipo 3 vs Mean Machine', 'Agosto 16', '6:00 pm'),

    createData('Mean Machine vs Chicharrones FC', 'Agosto 23', '5:00 pm'),
    createData('Equipo 3 vs Kronos', 'Agosto 23', '6:00 pm'),

    createData('Chicharrones FC vs Kronos', 'Agosto 30', '5:00 pm'),
    createData('Mean Machine vs Equipo 3', 'Agosto 30', '6:00 pm'),

    createData('Equipo 3 vs Kronos', 'September 06', '5:00 pm'),
    createData('Chicharrones FC vs Mean Machine', 'September 06', '6:00 pm'),

    createData('Chicharrones FC vs Mean Machine', 'September 13', '5:00 pm'),
    createData('Kronos vs Equipo 3', 'September 13', '6:00 pm'),

];

function CalendarComponent(props) {
    const {classes} = props;

    return (
        <div className="calendar-div">
            {data.map(n => {
                return (
                    <SnackbarContent className={classes.snackbar}
                                     message={
                                         <div>
                                             <span className="math-span">{n.name}</span>
                                             <span className="math-date">{n.date}</span>
                                             <span className="math-hour">{n.hour}</span>
                                         </div>
                                     }/>
                );
            })}
        </div>
    );
}

CalendarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalendarComponent)