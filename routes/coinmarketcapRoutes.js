const axios = require('axios');

const baseUrl = "https://pro-api.coinmarketcap.com";

module.exports = (app) => {
    app.get("/coinmarketcap/globaldata", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=" + process.env.COINMARKETCAP_API_KEY);
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });
};