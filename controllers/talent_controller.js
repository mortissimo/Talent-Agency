const {Talent} = require("../models/index")

class TalentController{
    static getAll(req, res){
        Talent.findAll()
        .then(data =>{
            res.render('talent.ejs', {
                data
            })
        })
    }
}

module.exports = TalentController