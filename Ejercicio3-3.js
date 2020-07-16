let presupuesto=+prompt("Ingrese presupuesto a gastar: $");
let regalo="";

if (presupuesto<=10)
{
    regalo="Tarjeta";
}
else if (presupuesto>=11 && presupuesto<=100)
{
    regalo="Chocolates";

}
else if (presupuesto>100 && presupuesto<=250)
{
    regalo="Flores";

}
else if (presupuesto>250) {
    regalo="Anillo";

}

window.alert(`Su presupuesto le permite relar un ${regalo}`);