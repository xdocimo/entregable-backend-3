const express = require('express')
const fs = require("fs")
const app = express()
const path = require('path')
const users = require("../models/users")
const bcrypt = require("bcrypt")
const session = require('express-session')
const { validationResult, body } = require('express-validator');

const obtenervista = (req, res) => {
    return res.render("login")
}

const obtenervistareg = (req, res) => {
    return res.render("register")
}

const Procesarform = (req, res) => {
    const { username, password } = req.body

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ msg: "Hubo un error"}); 
    }
    const user = users.filter((u => u.username == username))[0]
    if(!user) return res.render("userincorrecto")
    const savedpassword = user.password
    var status = validacion(password, savedpassword);
    if (status) {
        return res.render("logeado", user)       
    }

    else {
        return res.render("contraincorrecta")    
    }
}

const validacion = (password, passwordCrypted) => {
    var isvalid = bcrypt.compareSync(password, passwordCrypted)
    return isvalid;
}


const hashear = () => {
    const passwordx = "test"
    const passwordHashed = bcrypt.hashSync(passwordx, 10)
    console.log(passwordHashed)
}

const Procesarformreg = (req, res) => {
    var { username, password } = req.body
    const user = users.filter((u => u.username == username))[0]
    const id = 0
    if(!user) {
        var password = bcrypt.hashSync(password, 5)
        users.push({id, username, password})
        console.log(username + "registrado con éxito!")
    }
    else {
        console.log("Usuario existente!")
    }
}


module.exports = {
    obtenervista,
    Procesarform,
    validacion,
    hashear,
    obtenervistareg,
    Procesarformreg,
}