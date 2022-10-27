const homeView = (req, res) => {
    res.render("home.ejs");
    console.log("Done!");
}

const cartView = (req, res) => {
    res.render("cart.ejs");
    console.log("Done!");
}

const loginView = (req, res) => {
    res.render("login.ejs");
    console.log("Done!");
}

const registerView = (req, res) => {
    res.render("register.ejs");
    console.log("Done!");
}

const dproductView = (req, res) => {
    res.render("dproduct.ejs");
    console.log("Done!");
}

module.exports = {
    homeView,
    cartView,
    loginView,
    registerView,
    dproductView,
}