const axios = require('axios');

const baseUrl = "https://api.binance.us";

module.exports = (app) => {
    app.get("/binance/ohlc", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/api/v3/klines?symbol=" + req.query.symbol.toUpperCase() + "USD&interval=" + req.query.interval + "&limit=" + req.query.limit);
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });

    app.get("/binance/orderbook", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/api/v3/depth?symbol=" + req.query.symbol.toUpperCase() + "USD");
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });

    app.get("/binance/recenttrades", async (req, res) => {
        try {
            let response = axios.get(baseUrl + "/api/v3/trades?symbol=" + req.query.symbol.toUpperCase() + "USD");
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });
};