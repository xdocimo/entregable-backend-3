const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({ extended: true }))

const session = require('express-session')
const PORT = 3000
app.listen(PORT, () => console.log("Escuchando en el puerto" + PORT))

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
},
app.get('/detalle-producto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/detail-product.html'))
},

/* app.get('/inicio-sesion', (req, res) => {
    res.render("login.ejs")
}, */

app.use('/', require('./users'))
app.set('view engine', 'ejs')



/* 
app.get('/registrarme', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/register.html'))
},
app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/cart.html'))
},
app.get("/get-cookie", (req,res) => {
    const cookie = req.cookies
    res.json = 
    res.send(cookie)
},
app.get("/set-cookie", (req,res) => {
    const cookie = req.query.cookie
    res.cookie("cookie", cookie)
    console.log(cookie)
    res.send(cookie)
},
)
)
)
)
*/
