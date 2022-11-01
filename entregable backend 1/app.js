const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require("body-parser")
const PORT = 3000
app.listen(PORT, () => console.log("Escuchando en el puerto" + PORT))


app.get('/', (req, res) => {
    //res.send("Estamos en casa!")
    res.sendFile(path.join(__dirname, 'index.html'))
},
app.get('/detalle-producto', (req, res) => {
        //res.send("Estamos en detail product")
    res.sendFile(path.join(__dirname, 'dproduct.html'))
},

app.get('/inicio-sesion', (req, res) => {
        //res.send("Estamos en Login")
    res.sendFile(path.join(__dirname, 'login.html'))
},

app.get('/registrarme', (req, res) => {
        //res.send("Estamos en Register!")
    res.sendFile(path.join(__dirname, 'register.html'))
},
app.get('/carrito', (req, res) => {
        //res.send("Estamos en carrito")
    res.sendFile(path.join(__dirname, 'cart.html'))
},
)
)
)
)
)