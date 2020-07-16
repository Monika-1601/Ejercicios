let horastrabajadas=+prompt("Ingrese las horas trabajadas de la semana:");
let pagoporhora=+prompt("Ingrese el pago por hora:");

const horasnormales=40;

let horasextras=0;
let pagoporhoraextra=pagoporhora*2;
let pagosemanal=0;

if (horastrabajadas>horasnormales)
{
   horasextras=horastrabajadas-horasnormales;
    
}

   pagosemanal=((horastrabajadas-horasextras)*pagoporhora+horasextras*pagoporhoraextra);

   window.alert(`Su pago de la semana es: ${pagosemanal}`);