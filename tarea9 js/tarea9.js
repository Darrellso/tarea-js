let añosdelmundial = ["2002", "2006","2010","2014","2018","2022"
]
let nomundial = ["2003","2004","2005","2007","2008","2009","2011","2012","2013","2015","2016","2017","2019","2020","2021"

];

let año = prompt( "en que año nacio")

for (let i = 0; i <= añosdelmundial.length; i++) {
    if (año == añosdelmundial[i]) {
        alert('usted es mundialista') }
    }

for (let i = 0; i <= nomundial.length; i++) {
    if (año == nomundial[i]) {
        alert('usted no es un mundialista') }
    }