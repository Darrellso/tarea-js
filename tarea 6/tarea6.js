let option = prompt('Ingresar: 1. Sumar, 2. Restar, 3. Dividir, 4. Multiplicar'),
    num1 = prompt('Numero uno'),
    num2 = prompt('Numero dos');

let value1 = parseInt(num1),
    value2 = parseInt(num2);


if (option == 1) {
    let resultado = value1 + value2;
    alert('El resultado de la suma es : ' + resultado);
} else if (option == 2) {
    let resultado = value1 - value2;
    alert('El resultado de la resta es : ' + resultado);

} else if (option == 3) {
    let resultado = value1 / value2;
    alert('El resultado de la division  es : ' + resultado);

} else if (option == 4) {
    let resultado = value1 * value2;
    alert('El resultado de la suma es : ' + resultado);

}