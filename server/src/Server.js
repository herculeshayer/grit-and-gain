require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000;


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser : true, useUnifiedTopology : true });
const db = mongoose.connection;
db.on('error', err=>console.log(err));
db.once('open', ()=>console.log('Successful Connection'));

app.use(express.json());

const articleRoutes = require('./routes/Articles');
app.use('/Articles', articleRoutes);





app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));


