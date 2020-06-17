const valoresAtmosfericos = require('./controlador/valoresAtmosfericos');
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        description: 'Nombre de la ciudad para obtener el clima',
        demand: true
    },
    opcional: {
        alias: 'o',
        description: 'Contiene informacion sobre presion = p y humedad = h del país ingresado'
    }
}).argv;

const getInformacion = async(ciudad) => {
    try {
        const valores = await valoresAtmosfericos.getValor(argv.ciudad);
        if (argv.opcional == 'p') {
            return `La temperatura de la ciudad ${ciudad} es de ${valores.c}\nLa presión de la ciudad ${ciudad} es de ${valores.p}`

        } else if (argv.opcional == 'h') {
            return `La temperatura de la ciudad ${ciudad} es de ${valores.c}\nLa humedad de la ciudad ${ciudad} es de ${valores.h}`

        } else {
            return `El clima de la ciudad ${ciudad} es de ${valores.c}`;
        }
    } catch (e) {
        return `No se pudo obtener el clima de ${ ciudad }`;
    }
}

getInformacion(argv.ciudad)
    .then(console.log)
    .catch(console.log);