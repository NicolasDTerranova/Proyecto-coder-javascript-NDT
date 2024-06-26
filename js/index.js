// VARIABLE
const EDAD = parseInt(prompt("Escribí tu edad"));
const PRECIO_CLASES = 1200;

// ARRAY DE PRECIOS POR EDAD
const preciosPorEdad = [
    { edad: 15, precio: 18000 },
    { edad: 16, precio: 19200 },
    { edad: 17, precio: 20400 },
    { edad: 18, precio: 21600 },
    { edad: 19, precio: 22800 },
    { edad: 20, precio: 24000 },
    { edad: 21, precio: 25200 },
    { edad: 22, precio: 26400 },
    { edad: 23, precio: 27600 },
    { edad: 24, precio: 28800 },
    { edad: 25, precio: 30000 },
    { edad: 26, precio: 31200 },
    { edad: 27, precio: 32400 },
    { edad: 28, precio: 33600 },
    { edad: 29, precio: 34800 },
    { edad: 30, precio: 36000 },
    { edad: 31, precio: 37200 },
    { edad: 32, precio: 38400 },
    { edad: 33, precio: 39600 },
    { edad: 34, precio: 40800 },
    { edad: 35, precio: 42000 },
    { edad: 36, precio: 43200 },
    { edad: 37, precio: 44400 },
    { edad: 38, precio: 45600 },
    { edad: 39, precio: 46800 },
    { edad: 40, precio: 48000 },

    
];

// CONDICIÓN
if (isNaN(EDAD)) {
    alert("No se ingresó un número");
} else {
    if (EDAD < 15) {
        alert("No tenemos clases disponibles para menores de 15 años");
    } else if (EDAD >= 15) {
        let experiencia = prompt("¡Tenemos clases para vos! Contanos con un Si o un No, si tenes experiencia ya sea autodidacta o con clases formales");
        if (experiencia.toLowerCase() === "si") {
            alert("¡Contactate por mail para que te enviemos el programa!");
        } else {
            alert("¡Contactate por mail para que te asesoremos!");
        }
    }
}

// MÉTODOS DE BÚSQUEDA Y FILTRADO
const buscarPrecioPorEdad = (edad) => {
    return preciosPorEdad.find(precio => precio.edad === edad);
};

const filtrarPreciosPorEdadMinima = (edadMinima) => {
    return preciosPorEdad.filter(precio => precio.edad >= edadMinima);
};

// CICLO PARA MOSTRAR PRECIOS POR EDAD (la idea es que se calcule un costo por la edad del alumno)
for (let i = 15; i <= 40; i++) {
    const precioCalculado = buscarPrecioPorEdad(i);
    if (precioCalculado) {
        precio = precioCalculado.precio;
    } else {
        precio = PRECIO_CLASES * i;
    }
    console.log(PRECIO_CLASES + " es el costo de hora de clase multiplicado por la edad de " + i + " = " + precio + " es el valor a cobrarle a un estudiante de esta edad");
}

// MÉTODOS (para buscary filtrar)
console.log(buscarPrecioPorEdad(40));
console.log(filtrarPreciosPorEdadMinima(15)); // Filtra los precios para edades mayores o iguales a 17