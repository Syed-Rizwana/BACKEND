const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const share = require('./Routes/share');
const feedback = require('./Routes/feedback');
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("Route")
}
)
app.use('/share', share);
app.use('/feedback', feedback);
module.exports = app;