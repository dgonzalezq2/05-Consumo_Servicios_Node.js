const clima = require('./controlador/clima');
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        description: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInformacion = async(ciudad) => {
    try {
        const temp = await clima.getClima(argv.ciudad);
        return `El clima de la ciudad ${ciudad} es de ${temp}`;
    } catch (e) {
        return `No se pudo obtener el clima de ${ciudad}`;
    }
}

getInformacion(argv.ciudad)
    .then(console.log)
    .catch(console.log);