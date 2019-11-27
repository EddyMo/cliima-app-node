const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=970a9eb6944f0271d00b84f583ae605f&units=metric`);
    return resp.data.main.temp;
}
module.exports = {
    getClima
}