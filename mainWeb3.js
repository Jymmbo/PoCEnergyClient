/*
** CONFIGURACION INICIAL
*/

//Definicion del nodo / proveedor de servicios
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    //web3 = new Web3(new Web3.providers.HttpProvider("http://ethpocmtcxle.westeurope.cloudapp.azure.com:8545"));
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    //web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.23.128:8545"));
}

/*COGEMOS TODAS LAS CUENTAS DE NUESTRO NODO
accountNum = web3.eth.accounts.length;
select = document.getElementById('accountsSelect');
for (i = 0; i < accountNum; i++) {
    opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = web3.eth.accounts[i];
    select.appendChild(opt);
}*/

//Definimos cuenta con la que vamos a trabajar
web3.eth.defaultAccount = web3.eth.accounts[0];
//web3.eth.defaultAccount.gas = '3';

//DEFINICION DE LA DIRECCION DEL SMART CONTRACT
var PoCEnergy = PoCEnergyContract.at('0xb5862b687a7405bb47ebce93ae964c68cde3ef9e');
console.log(PoCEnergy);

/*
** FUNCIONES DE NUESTRO CLIENTE
*/

//Cargamos los usuarios de la Blockchain
accountNum = web3.eth.accounts.length;
select = document.getElementById('accountsSelect');
for (i = 0; i < accountNum; i++) {
    //Recorremos con las cuentas que tenemos los usuarios de la Blockchain
    PoCEnergy.getUser(web3.eth.accounts[i], function(error, result){
        if(!error && result!=null){
                opt = document.createElement('option');
                opt.value = web3.eth.accounts[i];
                opt.innerHTML = web3.eth.accounts[i] + " - " + result[0];
                select.appendChild(opt);
                console.log("Usuario X: " + result);
        }else{
            alert(error);
            console.error(error);
        }
    });    
}
//Obtener todos los usuarios
/*PoCEnergy.getUsers(function(error, result){
    if(!error){
            console.log(result);
    } else {
        console.error(error);
    }
});*/


//Operaciones PRECIO
function getBCHPrize(){
    alert("getBCHPrize");
    PoCEnergy.getPrize(function(error, result){
        if(!error){
                alert(result);
                console.log(result);
        }else{
            alert(error);
            console.error(error);
        }
    });
}
function setBCHPrize(){
    alert("setBCHPrize");
    PoCEnergy.setPrize($("#prize").val());
}


//Operaciones PRODUCCION DE ENERGIA
/*function getBCHPrize(){
    alert("getBCHPrize");
    PoCEnergy.getPrize(function(error, result){
        if(!error){
                alert(result);
                console.log(result);
        }else{
            alert(error);
            console.error(error);
        }
    });
}*/

function setProducedEnergy(){
    alert("setProducedEnergy");
    select = document.getElementById('accountsSelect');
    addres = select.options[select.selectedIndex].value;
    alert(addres);

    PocEnergy.setProducedEnergy($("#producedEnerQuantity").val(), $("#producedEnerDate").val());

    /*myselect = document.getElementById("userProfiles");
       profile = myselect.options[myselect.selectedIndex].value;
        alert($("#userAddress").val() + " - " + $("#userName").val() + " - " + profile);
        PoCEnergy.setUser($("#userAddress").val(), $("#userName").val(), profile);
    PoCEnergy.setPrize($("#prize").val());*/
}



    //alert(PoCEnergy.getUsers());

    //Definimos las funcionalidades del cliente
$("#button").click(function() {
    myselect = document.getElementById("operationsSelect");
    operation = myselect.options[myselect.selectedIndex].value;

    if (operation=="setPrize"){
        alert("Establacer precio");
        setPrize();
    }else if (operation=="produceEnergy"){
        setProducedEnergy();
    }else if (operation=="purchaseEnergy"){
        //setPurchasedEnergy();
    }else if (operation=="consumeEnergy"){
        //setConsumedEnergy();
    }
    /*else if(operation=="addUser"){
        alert("Añadir usuario");
        myselect = document.getElementById("userProfiles");
        profile = myselect.options[myselect.selectedIndex].value;
        alert($("#userAddress").val() + " - " + $("#userName").val() + " - " + profile);
        PoCEnergy.setUser($("#userAddress").val(), $("#userName").val(), profile);
    }*/
});

//TODO: TRATAMIENTO DE LOS BLOQUES
/*var filter = web3.eth.filter('latest');
filter.watch(function(error, result){
    if (error) {
        alert("tratarBloques - error");			
        console.log(error);
        return;
    }else{
        alert("tratarBloques - bien");
        var block = web3.eth.getBlock(result, true);
        console.log('block #' + block.number);

        console.dir(block.transactions);
    }
    //for (var index = 0; index < block.transactions.length; index++) {
    //	var t = block.transactions[index];
    //}
});

filter.watch(function(error, result){
    if (error) {
        alert("Errorrrrrr");
        return;
    }else{
        console.log("Rrrrrresultado: " + result);
        alert("Resultado: " + result);
    }
});

var i = 1;
//while (i<108) {
    i++;

    var block = web3.eth.getBlock(i, true);

    for (var index = 0; index < block.transactions.length; index++) {
        var t = block.transactions[index];
        alert(t.from);
    }

    web3.eth.getBlock(i, function(error, result){
        if(!error && result!=null){
            if (result.transactions.length!=0){
                console.log("Bloque: " + i + " - transacciones: " + result.transactions.length);
                var t = result.transactions[0];
                alert(t);
                // Decode from
                alert(t.from);
            }
        }
        else{
            alert("error");
            console.error(error);
        }
    });
//}
*/