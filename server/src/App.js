const express = require("express");
const app = express();

app.use(express.json());


app.get('/api/text', ( req , res ) => {
    res.status(404).send(`sorry can't find that`);
})






app.listen('8000', () => console.log('Listening on PORT 8000'));


