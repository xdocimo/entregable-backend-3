const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({ extended: true }))
const { homeView, cartView, loginView, registerView, dproductView } = require("./controllers/views");
const { getAll, getOne, create, update, deleteOne } = require('./controllers/products');

const session = require('express-session')
const PORT = 3000
app.listen(PORT, () => console.log("Escuchando en el puerto" + PORT))


app.use('/', require('./users')) // PARA LOGIN Y REGISTER!!
app.set('view engine', 'ejs')
app.get('/', homeView)
app.get('/cart', cartView)
app.get('/login', loginView)
app.get('/register', registerView)
app.get('/detailproduct', dproductView)
app.get('/products', getAll)
app.get('/products/:id', getOne)
app.post('/products/', create)
app.put('/products/:id', update)
app.delete('/products/:id', deleteOne)

module.exports = app;