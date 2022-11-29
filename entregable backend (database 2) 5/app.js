const usuario = require("../models".user);

module.exports = {

    create: async (req,res) => {
        try{

            const {name, password, email} = req.body

            let user = await usuario.create ({name,password,email})

            res.status(200).send(user)
    }catch(e){
        res.status(404).send("$e")
    }
},
}