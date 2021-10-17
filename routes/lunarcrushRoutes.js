const axios = require('axios');

const baseUrl = "https://api.lunarcrush.com";

module.exports = (app) => {
    app.get("/lunarcrush/globaldata", (req, res) => {
        axios.get(baseUrl + "/v2?data=global&interval=day&change=1d&data_points=30&key=" + process.env.LUNARCRUSH_API_KEY)
            .then((data) => res.json(data.data));
    });
};