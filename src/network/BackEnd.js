import axios from 'axios';

var host = "http://localhost:8080";
var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

export function getEstadoDeCuenta(){
    var estado = {cantidad:2500, numero:102114144, tipo:"CTS"};
    return estado;
}

export function createNewuser(info){
    axios.post(host+"/user/register", info)
        .then(res =>{
            if(info.type === "CTS"){
                window.alert("Su cuenta fue creada satisfactoriamente")
            }else{
                window.alert("Espere un email de confirmacion para su cuenta")
            }
        })
        .catch(err=>{
            window.alert("No fue posible crear su cuenta, la informacion no es veridica o su cuenta esta reportada");
        })
}

export function handleLoginPage(info, fun) {
    axios.post(host+"/user/login",info)
        .then(res=>{
            sessionStorage.setItem("accessToken",res.data.accessToken);
            fun(true);
        })
        .catch(err=>{
            window.alert("Las credenciales estan mal");
        });
}

export function transferMoney(info) {
    var succes= false;
    console.log(info);
    return succes;
}