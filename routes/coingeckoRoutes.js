const axios = require('axios');

const baseUrl = "https://api.coingecko.com";

module.exports = (app) => {
    app.get("/coingecko/globaldata", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/api/v3/global");
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });

    app.get("/coingecko/trendingcoins", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/api/v3/search/trending");
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });

    app.get("/coingecko/allcoins", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/api/v3/coins/markets?vs_currency=usd&per_page=200&page=1&sparkline=true&price_change_percentage=1h%2C7d");
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });

    app.get("/coingecko/coinohlc", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/api/v3/coins/" + req.query.coin + "/ohlc?vs_currency=usd&days=1");
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });

    app.get("/coingecko/coinmetadata", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/api/v3/coins/" + req.query.coin);
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });

    app.get("/coingecko/coinohlc", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/api/v3/coins" + req.query.coin + "/ohlc?vs_currency=usd&days=1");
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });

    app.get("/coingecko/coinhistoricaldata", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/api/v3/coins/" + req.query.coin + "/market_chart?vs_currency=usd&days=" + req.query.duration + "&interval=" + req.query.interval);
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });
};