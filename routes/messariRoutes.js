const axios = require('axios');

const baseUrl = "https://data.messari.io";

module.exports = (app) => {
    app.get("/messari/allcoins", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/api/v1/assets?limit=500&page=1");
            res.json(response.data.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });

    app.get("/messari/coinmetadata", async (req, res) => {
        try {
            let metricsResponse = await axios.get(baseUrl + "/api/v1/assets/" + req.query.coin + "/metrics");
            let profileResponse = await axios.get(baseUrl + "/api/v2/assets/" + req.query.coin + "/profile");
            let response = { ...metricsResponse.data.data, profile: { ...profileResponse.data.data.profile } };
            res.json(response);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });
};