let sueldodic=+prompt("Ingrese el sueldo de diciembre:");

const paqueteA="Paquete A: una televisión, un modular, tres pares de zapatos, cinco camisas y cinco pantalones.";
const paqueteB="Paquete B: una grabadora, tres pares de zapatos, cinco camisas y cinco pantalones.";
const paqueteC="Paquete C: dos pares de zapatos, tres camisas y tres pantalones.";
const paqueteD="Paquete D: un par de zapatos, dos camisas y dos pantalones.";

let paquetedic="";

if (sueldodic>=50000)
{
    paquetedic=paqueteA;
}
else if (sueldodic<50000 && sueldodic>=20000 )
{
    paquetedic=paqueteB;
}
else if (sueldodic<20000 && sueldodic>=10000 )
{
    paquetedic=paqueteC;
}
else if (sueldodic<10000)
{
    paquetedic=paqueteD;
}

   window.alert(`En diciembre podrá adquiriri el  ${paquetedic} `); 
   