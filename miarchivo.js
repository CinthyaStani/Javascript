let producto1 = 500
let producto2 = 600
let producto3 = 700

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const iva = x => x * 0.21
const descuento = j => j * 0.10

// Un producto con iva
if (producto1) {
    let precio = suma(producto1, iva(producto1)) 
    console.log("El precio del producto es: $" + precio)
} else {
    console.log("Gracias por venir, vuelva pronto")
}

console.log("----------")

// Descuento al segundo producto
if (producto1, producto2) {
    let precio1 = suma(producto1, iva(producto1)) 
    let precio2 = suma(producto2, iva(producto2))
    let total = suma(precio1, precio2)
    console.log("El precio total de los dos productos es: $" + total)

    let final = resta(total, descuento(precio2))
    console.log("El precio total con descuento es: $" + final) 
} else {
    console.log("Gracias por venir, vuelva pronto")
}
console.log("----------")

// Descuento con tres productos
if (producto1, producto2, producto3) {
    let precio1 = suma(producto1, iva(producto1)) 
    let precio2 = suma(producto2, iva(producto2))
    let precio3 = suma(producto3, iva(producto3))
    let total = suma(suma(precio1, precio2), precio3)
    console.log("El precio total de los tres productos es: $" + total)

    let final = resta(total, descuento(total))
    console.log("El precio total con descuento es: $" + final)
} else {
    console.log("Gracias por venir, vuelva pronto")
}


console.log("----------")

// Bucle 
// El cliente se lleva 5 productos iguales 

let precioFinal = 0;

for(let i = 1; i <= 5; i++){
    precioFinal = suma (precioFinal, suma(producto1, iva(producto1)))
}

console.log("El precio final es: $" + precioFinal)