let dulce = ["flauta de guayaba", "cacho de dulce de leche", "pañuelo de crema pastelera" ]
let salado = [ "pan de pizza", "pan con jamón y queso"]

let comida = prompt("le gustarìa comida dulce o salada")


for (let i = 0; i <= dulce.length; i++) {
    if (comida == dulce[i]) {
        alert('dulce') 
    }
}
for (let i = 0; i <= salado.length; i++) {
    if (comida == salado[i]) {
        alert('salado') 
    }
}