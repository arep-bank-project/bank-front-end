import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

class Reference extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:"",
            id:"",
            address:"",
            number:""
        }
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        this.props.updateReferences(this.state);
      };
    render(){
        return(
            <>
                <FormControl margin="normal" required fullWidth onChange={this.handleChange("email")}>
                    <InputLabel htmlFor="name">Nombre Completo</InputLabel>
                    <Input id="name" name="name" autoComplete="ename" autoFocus/>
                </FormControl>
                <FormControl margin="normal" required fullWidth onChange={this.handleChange("email")}>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" autoFocus/>
                </FormControl>
                <FormControl margin="normal" required fullWidth onChange={this.handleChange("id")}>
                    <InputLabel htmlFor="id">Cedula</InputLabel>
                    <Input name="id" type="number" id="id" autoComplete="id"/>
                </FormControl>
                <FormControl margin="normal" required fullWidth onChange={this.handleChange("direccion")}>
                    <InputLabel htmlFor="address">Direccion</InputLabel>
                    <Input name="address" type="string" id="address" autoComplete="address"/>
                </FormControl>
                <FormControl margin="normal" required fullWidth onChange={this.handleChange("number")}>
                    <InputLabel htmlFor="number">Celular</InputLabel>
                    <Input name="number" type="number" id="number" autoComplete="number"/>
                </FormControl>
            </>
        );
    }
}

export default Reference;
