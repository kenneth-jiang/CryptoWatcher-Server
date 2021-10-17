const express = require('express');
const cors = require('cors');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};
// require('./models/user');

const app = express();

app.use(cors());

// require('./routes/binanceRoutes')(app);
// require('./routes/coingeckoRoutes')(app);
// require('./routes/cryptocompareRoutes')(app);
require('./routes/lunarcrushRoutes')(app);
// require('./routes/messariRoutes')(app);

// app.get("/", (req, res) => {
//     axios.get("https://api.lunarcrush.com/v2?data=global&interval=day&change=1d&data_points=30&key=" + "nqwamcnzr4k0v4jl4s2j")
//         .then(data => res.json(data.data));
// });

const PORT = process.env.PORT || 8081;
app.listen(PORT);