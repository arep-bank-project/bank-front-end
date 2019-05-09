import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

class Transference extends React.Component{
    constructor(props){
        super(props);
        this.state={number:0,type:"CTS",quantity:"0"};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    };

    render() {
        return(
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        Transferencia de dinero
                    </Typography>
                    <form onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth onChange={event => this.setState({number:event.target.value})}>
                            <InputLabel htmlFor="number">Numero de cuenta a transferir</InputLabel>
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
                        <FormControl margin="normal" required fullWidth onChange={event => this.setState({quantity:event.target.value})}>
                            <InputLabel htmlFor="quantity">Cantidad a transferir</InputLabel>
                            <Input name="number" type="number" id="quantity" autoComplete="quantity"/>
                        </FormControl>
                        <Button type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                        >
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        );
    }
}

export default Transference;