// VARIABLE
const EDAD = parseInt (prompt("Escribí tu edad"));
const PRECIO_CLASES = 1200;

//CONDICION
if (isNaN(EDAD)){
    alert("No se ingresó un número");
}
else {
    if (EDAD <15){
    alert("No tenemos clases disponibles para menores de 15 años");
}
    else if (EDAD >=15){
    let experiencia = prompt ("¡Tenemos clases para vos! Contanos con un Si o un No, si tenes experiencia ya sea autodidacta o con clases formales");
    if (experiencia === "si"){alert ("¡Contactate por mail para que te enviemos el programa!");}
    else {alert ("¡Contactate por mail para que te asesoremos!");}}

}

//CICLO PRECIO CLASES X EDAD

for (let i = 15; i <=40 ; i++){
    const PRECIO = PRECIO_CLASES * i;
    console.log(PRECIO_CLASES + " es el costo de hora de clase multiplicado por la edad de " + i + " = " + PRECIO + " es el valor a cobrar")
}