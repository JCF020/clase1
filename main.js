//alert('hola');

let diametroRueda = window.prompt("Ingrese el diamentro de la rueda");

let grosorRueda = window.prompt("Ingrese el grosor de la rueda");

if(diametroRueda > 1.4){
    alert("La rueda es para un vehículo grande");
}
else if(diametroRueda <= 1.4 && diametroRueda >0.8){
    alert("La rueda es para un vehículo mediano");
}
else{
    alert("La rueda es para un vehículo pequeño");
}

if(diametroRueda > 1.4 && grosorRueda < 0.4 || diametroRueda <= 1.4 && diametroRueda >0.8 || grosorRueda <0.25)
{
    alert("El grosor para esta rueda es inferior al recomendado");    
}
console.log(diametroRueda);