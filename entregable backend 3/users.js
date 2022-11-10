const express = require('express')
const { body } = require("express-validator")
const userController = require("./controllers/users")
const app = express.Router()
const PORT = 3000

app.get("/inicio-sesion", userController.obtenervista)
app.post("/inicio-sesion",
body("username").notEmpty().withMessage("El username no puede estar vacio"),
body("password").isLength({ min: 4}).withMessage("Hay un dato incorrecto"), userController.Procesarform)

app.get("/registrarse", userController.obtenervistareg)
app.post("/registrarse",
body("username").notEmpty().withMessage("El username no puede estar vacio"),
body("password").isLength({ min: 4}).withMessage("Hay un dato incorrecto"), userController.Procesarformreg)

module.exports = app