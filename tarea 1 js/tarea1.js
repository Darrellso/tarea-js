let edad;
edad = prompt("digite su edad");
if (edad <= 3) {
    alert("es un bebe ")

} else if (edad >= 4 && edad < 12) {
    alert("es un niño ")
} else if (edad >= 12 && edad < 18) {
    alert("es un es un adolecente")
} else if (edad >= 18 && edad < 65) {
    alert("es un adulto")
} else {
    alert("es un adulto mayor  ")
};