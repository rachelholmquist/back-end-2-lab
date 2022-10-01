const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(4004, () => console.log('app running on port 4004'));