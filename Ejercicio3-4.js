let nrohoras=+prompt("Ingrese nro total de horas en estacionamiento:");

const costo2h=5;
const costo3h=4;
const costo5h=3;
const costo10h=2;

let nrohorasrestantes=0;
let pagoacum=0;

if (nrohoras<=2){
    pagoacum=nrohoras*costo2h;
}
else if (nrohoras>2 && nrohoras<=5)
{
    pagoacum=(2*costo2h)+((nrohoras-2)*costo3h);
}
else if (nrohoras>5 && nrohoras<=10)
{
    pagoacum=(2*costo2h)+(3*costo3h)+((nrohoras-5)*costo5h);
}
else if (nrohoras>10)
{
    pagoacum=(2*costo2h)+(3*costo3h)+(5*costo5h)+((nrohoras-10)*costo10h)    ;
}

  window.alert(`El pago total del estacionamiento  es ${pagoacum}`);