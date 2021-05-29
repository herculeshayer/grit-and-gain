require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000;



app.use(express.json());







app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));


