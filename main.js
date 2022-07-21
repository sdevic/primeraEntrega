//Cristian, avance muchisimo utile arrays, objetos y bucles. Pero tuve algun inconveniente y aun no supe solucionarlo, la idea por ahora era hacer que ingresen nombre, tipo de pago, realizar un descuento y calcular el precio una y otra vez hasta que ingrese el usuario admin, para eso cree un array con objetos con los datos de las comprar, el problema estuvo con eso, logre crearlo y cuando lo listo cada vez q lo corro funcina bien, pero la idea era listarlo todo junto al final del dia (cuando ingrese el admin y mandar una lista, solo logro listar los nombres y no el resto de los atributos del objeto)..Bueno espero alguna correccion, Gracias

let tipoDePago ;
let tarjeta  ;
let descuento= parseInt ;
let precio= parseInt;
let prodcutos;
let total = parseInt;
let valorDescuento = parseInt;
let nombre;
let dos = "e";
let tres = "l";
let cinco = "p";
let seis = "e";
let siete = "q";
let ventaDiaria = [];
let prueba = "admin";
let i = parseInt(0);

// aca si ingresas admin te va a listar los nombres de usuario, lo unico que logre que liste
function nombreUsuario(){
   nombre = prompt("ingrese  su nombre");
   if(nombre == "admin"){
        ventaDiaria.forEach( elemento => {
        console.log(` Usuario: ${elemento.nombreUsuario} } `);
        
    })
    
    }else{
        alert("Bienvenido/a "  + nombre);
        return nombre;

    }

}



function prodcuto(){
    productos=prompt("ingrese  televisor o celular").toLowerCase();
    if (productos == "televisor"){
        precio = 50000;
        alert("ha seleccionado  televisor su precio es $" + precio);
        return precio;
        return productos;
    }else if(productos == "celular"){
        precio = 30000;
        alert("ha seleccionado  celular su precio es $" + precio);
        return precio;
        return productos;
    }else{
        alert("Elnumero ingresado es incorrecto");
        prodcuto();
    }
   
     

}

 


function ingreseTipoDePago(){
    tipoDePago = prompt("Ingrese tipo de pago (Efectivo o Tarjeta)").toLocaleLowerCase();
    if(tipoDePago == "tarjeta"){
        ingreseTarjeta();
        return tipoDePago;
        
    }else if(tipoDePago == "efectivo" ){
    return tipoDePago;
    }else{
        alert("a ingresado un tipo de pago incorrecto");
    }
}


function ingreseTarjeta(){
    tarjeta = prompt("Ingrese tarjeta (Visa o Mastercard)").toLowerCase();
    return tarjeta;
}
function ahorro(){
    
    switch(tipoDePago){

        case "tarjeta":
            if (tarjeta == "visa"){
                descuento = 10;
                alert("Ha seleccionado Visa y tiene un descuento del %" + descuento);
                return descuento;
                
            }else if(tarjeta == "mastercard"){
                descuento =  5;
                alert("Ha seleccionado Mastercard y tiene un descuento del %" + descuento);
                return descuento;
               }else{
                alert("la tarjeta ingresada es incorrecta");
                ingreseTarjeta();
               
            }
            break;

        case "efectivo":
            descuento =  20;
            alert("Ha seleccionado Efectivo y tiene un descuento del %" + descuento);
            tarjeta = "-";
            return tarjeta;
            return descuento;
            
            
            break;
        default:
            alert("el tipo de pago es incorrecto") ;
            ingreseTipoDePago();
            break      
    }
    

   
}

function precioFinal(){
    alert("precio $" +precio);
     valorDescuento =(precio* descuento)/100;
     alert("El descuento es de $"+ valorDescuento);
     total= precio - valorDescuento;
     alert("El precio final es $"+ total);
     return total;
     return descuento;

}
//creo que el problema esta en las proximas dos funciones

function DatosVenta(nombre,producto, pago, tarjeta, precioLista, descuento, precioFinal){
    this.nombreUsuario = nombre;
    this.productoSeleccionado = productos;
    this.tipoDePagoIngresado = tipoDePago;
    this.tarjetaIngresada = tarjeta;
    this.precioLista = parseInt (precio);
    this.descuentoRecibido =parseInt (descuento);
    this.precioFinal = parseInt (total);
    
}



function ventas(){
    const ventaRealizada = new DatosVenta(nombre,dos,tres,tarjeta,precio,descuento,total);
    console.log(ventaRealizada);
    ventaDiaria.push(ventaRealizada);
    return ventaDiaria;
}


nombreUsuario();
while(nombre != prueba){
    prodcuto();
    ingreseTipoDePago();
    ahorro();
    precioFinal();
    ventas();
    nombreUsuario();
   
}



