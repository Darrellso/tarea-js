let = notaminima = (0)
let = notamaxima = (100)

let promedio;
promedio = prompt("digite su promedio");
if (promedio == 0 && promedio < 65) {
    alert("se quedó ")
} else if (promedio >= 65 && promedio < 70) {
    alert("pasó raspando")
} else if (promedio > 70 && promedio <= 85) {
    alert(" nada mal")
} else if (promedio > 85 && promedio <= 99) {
    alert(" muy buen trabajo")
} else if (promedio == 100) {
    alert(" te ganaste un abrazo :) ")
}