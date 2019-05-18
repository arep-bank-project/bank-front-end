import axios from 'axios';

//var host = "http://localhost:8080";
var host = "http://ec2-54-196-0-103.compute-1.amazonaws.com:8080/";
var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
var funHome;
export function getEstadoDeCuenta(funUpdate){
    funHome = funUpdate;
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let estado = {cantidad:data.account.amount,
        numero:data.account.accountId,
        tipo:data.type};
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
            sessionStorage.setItem("accessToken",res.data.token.accessToken);
            sessionStorage.setItem("userData",JSON.stringify(res.data));
            sessionStorage.setItem("info",JSON.stringify(info));
            fun(true);
        })
        .catch(err=>{
            window.alert("Las credenciales estan mal");
        });
}

function handleInfo() {
    axios.post(host+"/user/login",JSON.parse(sessionStorage.getItem("info")))
        .then(res=>{
            console.log(res);
            sessionStorage.setItem("accessToken",res.data.token.accessToken);
            sessionStorage.setItem("userData",JSON.stringify(res.data));
            funHome();
        });
}

export function transferMoney(info) {
    var succes= false;
    let data = JSON.parse(sessionStorage.getItem("userData"));
    axios.put(host+"/user/transfer?fromAccount="+data.account.accountId+"&toAccount="+info.number+"&amount="+info.quantity)
        .then(res=>{
            window.alert("Transferencia exitosa");
            handleInfo();
        }).catch(err =>{
            window.alert("No se pudo hacer la transferncia");
    });
    console.log(info);
    return succes;
}