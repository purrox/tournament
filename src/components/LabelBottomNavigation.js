/**
 * Created by csalas on 7/24/18.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import {withRouter} from 'react-router-dom';

const styles = {
    root: {
        width: '100%',
        background: '#00000012',
        borderRadius: '20px',
    },
    button: {
        color: 'white',
    },
    selected: {
        color: '#e14a27 !important'
    },
};

class LabelBottomNavigation extends Component {
    state = {
        value: '',
    };

    handleChange = (event, value) => {
        this.setState(
            {value},
            ()=>{
                this.props.history.push(this.state.value);
            });
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        return (
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                <BottomNavigationAction
                    classes={{
                        root: classes.button,
                        selected: classes.selected,
                    }}
                    showLabel={true} label="Standings" value="home" icon={<Icon>table_chart</Icon>}
                />
                <BottomNavigationAction
                    classes={{
                        root: classes.button,
                        selected: classes.selected,
                    }}
                    showLabel={true} label="Calendar" value="calendar" icon={<Icon>event_note</Icon>}/>
                <BottomNavigationAction
                    classes={{
                        root: classes.button,
                        selected: classes.selected,
                    }}
                    showLabel={true} label="Stats" value="stats" icon={<Icon>list_alt</Icon>}/>
            </BottomNavigation>
        );
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)
(withRouter(LabelBottomNavigation));
