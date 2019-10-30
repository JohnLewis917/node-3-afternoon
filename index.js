require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require('./products_controller')

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
})
.catch(err => console.log(err))

app.use(express.json())

app.post('/api/products', ctrl.createProduct);
app.get('/api/products/:id',ctrl.getProduct);
app.get('/api/products', ctrl.getAllProducts);
app.put('/api/products/:id', ctrl.updateProduct);
app.delete('/api/products/:id', ctrl.deleteProduct);

app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} dollars in ma pocket`);
})