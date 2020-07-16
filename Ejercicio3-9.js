const costocoberturaA=1200;
const costocoberturaB=950;
const cargobebealcohol=0.10;
const cargousalentes=0.05;
const cargoenfermedad=0.05;
const cargoedadmas40=0.20;
const cargoedadmenos40=0.10;

let costobase=0;
let montototalpoliza=0;

let tipopoliza=prompt("Ingrese el tipo de poliza Cobertura Amplia o Daños a Terceros, ingrese A o B :");
let bebealcohol=prompt("Indique si bebe alcohol SI o NO ");
let usalentes=prompt("Indique si usa lentes SI o NO ");
let enfermedad=prompt("Indique si tiene enfermedad SI o NO ");
let edad=+prompt("Indique su edad ");

if (tipopoliza==="A")
{
    costobase=costocoberturaA;
}
else if (tipopoliza==="B")
{
    costobase=costocoberturaB;
}
else 
{
    window.alert(` Tipo de poliza no reconocida ${tipopoliza} `);
}

if (tipopoliza==="A" || tipopoliza==="B")
{
        if (bebealcohol==="SI")
        {
            montototalpoliza=(costobase*cargobebealcohol)+montototalpoliza;
        }

        if (usalentes==="SI")
        {
            montototalpoliza=(costobase*cargousalentes)+montototalpoliza;
        }

        if (enfermedad==="SI")
        {
            montototalpoliza=(costobase*cargoenfermedad)+ montototalpoliza;
        }

        if (edad<=40)
        {
            montototalpoliza=(costobase*cargoedadmenos40)+ montototalpoliza;
        }
        else 
        {
            montototalpoliza=(costobase*cargoedadmas40)+ montototalpoliza; 
        }

        montototalpoliza=montototalpoliza+costobase; 

        window.alert(` El total de la poliza es  ${montototalpoliza} `);
}