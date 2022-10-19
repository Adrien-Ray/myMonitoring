// DEPENDENCIES
// require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const {
    test,
    testTime,
} = require('./src/test.js');

const port = 8082;

// RUN SERVER
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.post('/test', (req, res) => {
    // console.log('/test');
    const rb = req.body;
    test(rb, res);
});

app.post('/test/time/', (req, res) => {
    console.log('/test/time/', req.body.url);
    testTime(req.body.url, res);
});