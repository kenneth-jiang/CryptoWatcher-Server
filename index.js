const express = require('express');
const cors = require('cors');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

const app = express();

app.use(cors());

require('./routes/binanceRoutes')(app);
require('./routes/coingeckoRoutes')(app);
require('./routes/coinmarketcapRoutes')(app);
require('./routes/cryptocompareRoutes')(app);
require('./routes/lunarcrushRoutes')(app);
require('./routes/messariRoutes')(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT);