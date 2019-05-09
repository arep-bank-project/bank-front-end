import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import NewUser from './components/NewUser';
import Main from './components/Main';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {loggedIn:true};
        this.handleLoggedIn = this.handleLoggedIn.bind(this);
    }

    handleLoggedIn = (log) => {this.setState({loggedIn:log})};

    render(){
        return(
            <Router>
                {this.state.loggedIn===true?
                    <Switch>
                        <Route path="/" component={Main}/>
                    </Switch>
                    :
                    <Switch>
                        <Route exact path="/" component={() => <Login handleLogin={this.handleLoggedIn}/>}/>
                        <Route path={"/NewUser"} component={NewUser}/>
                    </Switch>
                }
            </Router>
        );
    }
}


export default App;
