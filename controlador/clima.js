const axios = require("axios");

const getClima = async(ciudad) => {
    ciudad = encodeURI(ciudad);
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=afba5f241d142b7002658c6ee61acd50&units=metric`);
    return resp.data.main.temp;
};



module.exports = {
    getClima,
};