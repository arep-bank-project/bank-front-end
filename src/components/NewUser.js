import React from 'react';
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Reference from "./Reference";
import Typography from '@material-ui/core/Typography';

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


class NewUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            id:"",
            type:"CTS",
            direccion:"",
            number:"",
            references:{
                email:"",
                id:"",
                direccion:"",
                number:""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getReferences = this.getReferences.bind(this);
        this.setReferences = this.setReferences.bind(this);
        this.restartReferences = this.restartReferences.bind(this);
    }

    getReferences = () => {return this.state.references};

    setReferences = (ref) => {this.setState({references:ref})};

    restartReferences = () => {if(this.state.references=={references:{email:"",id:"",direccion:"",number:""}}) {this.setState({references:{email:"",id:"",direccion:"",number:""}})}};

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        const {classes} = this.props;
        return(
            <>
                <main className={classes.main}>
                    <CssBaseline/>
                    <Paper>
                        <Typography variant="h4" gutterBottom>
                            Formulario para pedir cuenta
                        </Typography>
                        <form onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth onChange={event => this.setState({email:event.target.value})}>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth onChange={event => this.setState({password:event.target.value})}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password"/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth onChange={event => this.setState({id:event.target.value})}>
                                <InputLabel htmlFor="id">Cedula</InputLabel>
                                <Input name="id" type="number" id="id" autoComplete="id"/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth onChange={event => this.setState({direccion:event.target.value})}>
                                <InputLabel htmlFor="direccion">Direccion</InputLabel>
                                <Input name="direccion" type="string" id="direccion" autoComplete="direccion"/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth onChange={event => this.setState({number:event.target.value})}>
                                <InputLabel htmlFor="number">Celular</InputLabel>
                                <Input name="number" type="number" id="number" autoComplete="number"/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth >
                                <FormLabel component="legend">Tipo</FormLabel>
                                <RadioGroup value={this.state.type} onChange={event => this.setState({type:event.target.value})}>
                                    <FormControlLabel value="CTS" control={<Radio color="primary"/>} label="CTS" labelPlacement="start"/>
                                    <FormControlLabel value="Persona Natural" control={<Radio color="primary"/>} label="Persona Natural" labelPlacement="start"/>
                                    <FormControlLabel value="Persona Juridica" control={<Radio color="primary"/>} label="Persona Juridica" labelPlacement="start"/>
                                </RadioGroup>
                            </FormControl>
                            {this.state.type == "CTS"?this.restartReferences():
                            <>
                                <Typography variant="h5" gutterBottom>
                                    Referencia
                                </Typography>
                                <Reference references={this.getReferences} updateReferences={this.setReferences}/>
                            </>
                            }
                            <Button type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    >
                                        Submit
                            </Button>
                            <br/>
                            <br/>
                            <Button component={Link}
                                    to={"/"}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                            >
                                Back
                            </Button>
                        </form>
                    </Paper>
                </main>
            </>
        );
    }
}

export default withStyles(styles)(NewUser);