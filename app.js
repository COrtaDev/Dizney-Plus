const express = require('express');



const app = express();
let port = Number.parseInt(process.env.PORT, 10) || 8080;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('Hello from Dizney+ Team!')
})






app.listen(port, () => {
    console.log(`Listening for requests on port ${port}...`);
});
