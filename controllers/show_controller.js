const {Show, Talent} = require("../models/index")

class ShowController{
    static getAll(req, res){
        Show.findAll({include:{model:Talent}})
        .then(data =>{
            res.render('')
        })
    }
}

module.exports = ShowController;