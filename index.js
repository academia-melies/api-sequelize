const express = require('express');
const app = express();
const routes = require('./src/routes')


app.use(express.json());
app.use(routes)

const PORT = process.env.PORT || '3000';

app.listen(PORT, () => {
    console.log(`API RODANDO NA PORTA ${PORT}`)
})