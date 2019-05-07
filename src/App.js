import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import NewUser from './components/NewUser.js';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={() => <Login />}/>
                    <Route path={"/NewUser"} component={NewUser}/>
                </Switch>
            </Router>
        );
    }
}


export default App;
