const express = require("express");
const { homeView, cartView, loginView, registerView, dproductView } = require("../controllers/products");
const router = express.Router();

router.get('/', homeView)
router.get('/cart', cartView)
router.get('/login', loginView)
router.get('/register', registerView)
router.get('/detailproduct', dproductView)

module.exports = router;