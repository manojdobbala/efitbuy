import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import Notifation from './components/notification';
import HomePage from './components/homepage';

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
                   <HomePage />
                   {/*<Notifation/>*/}
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;