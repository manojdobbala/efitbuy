import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import Notifation from './components/notification';
import HomePage from './components/homepage';
import HeaderWithDrawer from './components/sideDrawer';

class App extends Component {

    state = {
        username: "Manoj",
        selectedIndex: 0,
        dataSource: []
    };

    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                  <HeaderWithDrawer />
                   <HomePage />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;