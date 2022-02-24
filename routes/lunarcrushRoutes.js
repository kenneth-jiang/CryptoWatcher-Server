const axios = require('axios');

const baseUrl = "https://api.lunarcrush.com";

module.exports = (app) => {
    app.get("/lunarcrush/globaldata", async (req, res) => {
        try {
            let response = await axios.get(baseUrl + "/v2?data=global&interval=day&change=1d&data_points=30&key=" + process.env.LUNARCRUSH_API_KEY);
            res.json(response.data);
        } catch (error) {
            res.status(error.status).send(error);
        };
    });
};