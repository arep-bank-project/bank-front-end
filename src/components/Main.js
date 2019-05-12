import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Home from './Home';
import Transference from './Transference';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {open:false};
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleCloseSession = this.handleCloseSession.bind(this);
    }
    handleDrawerOpen = () => {this.setState({open:true})};
    handleDrawerClose = () => {this.setState({open:false})};
    handleCloseSession = () =>{
      sessionStorage.clear();
      window.location.href="/";
      this.props.handleLogin(false);
    };
    render() {
        return(
            <>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                >
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap style={{position:'center'}}>
                            Banco
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="persistent"
                        anchor="left"
                        open={this.state.open}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <Divider/>
                    <List>
                        <ListItem button key="home" component={Link} to="/">
                            <ListItemText primary="Home"/>
                        </ListItem>
                        <ListItem button key="transferencias" component={Link} to="/transference">
                            <ListItemText primary="Transferencias"/>
                        </ListItem>
                        <ListItem button key="cerrarSesion" onClick={this.handleCloseSession}>
                            <ListItemText primary="Cerrar Session"/>
                        </ListItem>
                    </List>
                </Drawer>
                <main>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/transference"} component={Transference}/>
                </main>
            </>
        );
    }
}

export default Main;