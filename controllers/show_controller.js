const {Show, Talent} = require("../models/index")

class ShowController{
    static getAll(req, res){
        res.render('show')
    }
}

module.exports = ShowController;