let america = ['Costa Rica', 'Argentina', 'Colombia', 'Nicaragua',
    'Panama', 'Uruguay', 'Estados Unidos', 'Canada', 'Mexico'
];

let europa = ['Espana', 'Italia', 'Francia', 'Rumania', 'Inglaterra', 'Alemania'];

let africa = ['Nigeria', 'Kenia', 'Ghana', 'Marruecos', 'Senegal'];

let oceania = ['Nueva Zelanda', 'Australia', 'Fiyi', 'Tonga'];


let ingresarPais = prompt('Ingresar un pais');
// 
for (let i = 0; i <= america.length; i++) {
    if (ingresarPais == america[i]) {
        alert('America')
    } else if (ingresarPais == europa[i]) {
        alert('Europa');
    } else if (ingresarPais == africa[i]) {
        alert('Africa');
    } else if (ingresarPais == oceania[i]) {
        alert('Oceania');
    }

}