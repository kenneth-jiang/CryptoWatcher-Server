const axios = require('axios');

const baseUrl = "https://min-api.cryptocompare.com";

module.exports = (app) => {
    app.get("/cryptocompare/newsarticles", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/data/v2/news/?lang=EN&api_key=" + process.env.CRYPTOCOMPARE_API_KEY);
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });
};