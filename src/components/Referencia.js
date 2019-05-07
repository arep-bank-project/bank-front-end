import React from 'react';

class Referencia extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
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
            </>
        );
    }
}

export default Referencia;
