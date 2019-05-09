import React from 'react';
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import {handleLoginPage} from "../network/BackEnd";

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    bigAvatar: {
        margin: theme.spacing.unit,
        width: 150,
        height: 150,
    },
});


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e){
        e.preventDefault();
        this.props.handleLogin(handleLoginPage(this.state));
    }

    render(){
        const {classes} = this.props;
        return(
            <>
                <main className={classes.main}>
                    <CssBaseline/>
                    <Paper>
                        <form onSubmit={this.handleLogin}>
                            <FormControl margin="normal" required fullWidth onChange={event => this.setState({email:event.target.value})}>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth onChange={event => this.setState({password:event.target.value})}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password"/>
                            </FormControl>
                            <Button type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    >
                                        Login
                            </Button>
                            <br/>
                            <br/>
                            <Button component={Link}
                                    to={"/NewUser"}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    >
                                        Create Account
                            </Button>
                        </form>
                    </Paper>
                </main>
            </>
        );
    }
}

export default withStyles(styles)(Login);