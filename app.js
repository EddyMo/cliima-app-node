const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;

//lugar.getLugarLatLon(argv.direccion)
// .then(console.log)
// clima.getClima(40.75, -74)
//     .then(console.log)
//     .catch(err => console.log('Error!!', err))

const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coord.lat, coord.lon);
        return `El clima de ${coord.dir} es de ${temp} grados centígrados`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);