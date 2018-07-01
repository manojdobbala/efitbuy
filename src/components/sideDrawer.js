import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Switch } from 'react-router';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class MyNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        // this.displayNavbar = this.displayNavbar.bind(this)
    }

    toggleDrawer = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <AppBar
                    iconElementRight={
                        <MenuItem
                            primaryText="Logout"
                        />
                    }
                    onLeftIconButtonTouchTap={() => this.toggleDrawer()}
                    title="EfitBay - Ultimate Breakfast recipes"
                />
                <Drawer
                    docked={true}
                    onRequestChange={(open) => this.setState({open})}
                    open={this.state.open}
                >
                    <MenuItem
                        onTouchTap={() => {
                            this.toggleDrawer()
                        }}
                        primaryText="Home"
                    />
                    <MenuItem
                        onTouchTap={() => {
                            this.toggleDrawer()
                        }}
                        primaryText="Some Component"
                    />
                </Drawer>
            </div>
        )
    }
}
