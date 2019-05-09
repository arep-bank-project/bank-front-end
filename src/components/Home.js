import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {getEstadoDeCuenta} from '../network/BackEnd'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = getEstadoDeCuenta();
    }

    render() {
        return(
            <Card>
                <CardContent>
                    <Typography color="textSecondary">
                        En la cuenta actualmente tiene:
                    </Typography>
                    <Typography variant="h3">
                        $ {this.state.cantidad}
                    </Typography>
                    <Typography color="textSecondary">
                        Su numero de cuenta es:
                    </Typography>
                    <Typography variant="h5">
                        {this.state.numero}
                    </Typography>
                    <Typography color="textSecondary">
                        Su cuenta es de tipo:
                    </Typography>
                    <Typography variant="h5">
                        {this.state.tipo}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default Home;