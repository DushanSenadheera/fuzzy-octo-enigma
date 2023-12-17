const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

const port = 3000;
app.get('/api', (req, res) => {
    res.json("Hello World from NodeJS")
});

app.listen(port, () => console.log(`Server running on port ${port}!`));