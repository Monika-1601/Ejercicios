let antiguedad=+prompt("Ingrese su antiguedad en la empresa:");
let sueldo=+prompt("Ingrese su sueldo en la empresa:");
let bono=0;
let bonoantiguedad=0;
let bonosueldo=0;

const ant1=0.20;
const ant2=0.30;

const sueld1=0.25;
const sueld2=0.15;
const sueld3=0.10;

if (antiguedad>2 && antiguedad<5)
{
    bonoantiguedad=(ant1*sueldo);
}
else if (antiguedad>=5)
{
    bonoantiguedad=(ant2*sueldo);
}

if (sueldo<1000)
{
    bonosueldo=(sueld1*sueldo);
}
else if (sueldo>=1000 && sueldo<3500)
{
    bonosueldo=(sueld2*sueldo);
}
else if (sueldo>3500)
{
    bonosueldo=(sueld3*sueldo);
}

if (bonoantiguedad>bonosueldo)
{
    bono=bonoantiguedad;
}
else
{
    bono=bonosueldo;
}

    window.alert(`Para una antiguedad de ${antiguedad} años y un sueldo de ${sueldo} le corresponde un bono de ${bono}`);