import React, {Component} from 'react';
import logo from './logo1.png';
import logoAvantica from './logo2.png';
import './App.css';
import CalendarComponent from './components/Calendar';
import MenuComponent from './components/menu.component';
import LabelBottomNavigation from './components/LabelBottomNavigation.js';
import CustomizedTable from './components/CustomTableCell';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router >
                <div className="App">
                    <header className="App-header">
                        <img className="av-logo" src={logoAvantica}></img>
                        <img className="App-logo" src={logo}></img>
                        <LabelBottomNavigation/>
                    </header>
                        <div>
                            <Route exact path="/" component={MenuComponent}/>
                            <Route path="/home" component={CustomizedTable}/>
                            <Route path="/calendar" component={CalendarComponent}/>
                        </div>
                </div>
            </Router>
        );
    }
}

export default App;
