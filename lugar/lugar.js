const axios = require('axios');

const getLugarLatLon = async(direccion) => {
    // Se obtiene la dirección den formato URI
    const encodedUrl = encodeURI(direccion);

    // Se crea una instancia / cliente del API
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 10000,
        headers: { 'x-rapidapi-key': '1fff7232ecmsh1c2d48feee28734p171084jsnee96112d74a3' }
    });

    const resp = await instance.get();
    if (resp.data.Results.lenth === 0) {
        return new Error(`No hay resultados para ${direccion}`);
    }
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        dir,
        lat,
        lon
    }

    // // Se llama al API
    // instance.get().then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('Error', err);
    //     })
}
module.exports = {
    getLugarLatLon
}