const express = require('express')
const router = require('./routes/router')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Running in ${process.env.PORT}`));
