
let antiguedad=+prompt("Ingrese su antiguedad en años:");

const bono1anio=100;
const bono2anio=200;
const bono3anio=300;
const bono4anio=400;
const bono5anio=500;
const bono5masanio=1000;

let bono=0;

if (antiguedad===1)
{
    bono=bono1anio;
}
else if (antiguedad===2)
{
    bono=bono2anio;
}
else if (antiguedad===3)
{
    bono=bono3anio;
}
else if (antiguedad===4)
{
    bono=bono4anio;
}
else if (antiguedad===5)
{
    bono=bono5anio;
}
else if (antiguedad>5)
{
    bono=bono5masanio;
}

window.alert(` El trabajador recibirá un bono de  ${bono} `);