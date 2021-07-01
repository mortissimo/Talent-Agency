const {Show, Talent} = require("../models/index")

class TalentController{
    static getAll(req, res){
        Talent.findAll()
        .then(data =>{
            res.render('talent.ejs', {
                data
            })
        })
    }
    // static talent_add_Get(req, res){
    //     res.render('talent_add.ejs', {
    //     })
    // }
    // static talent_add_Post(req, res){
    //     const {name, age, gender, talent} = req.body;
    //     Talent.create({name, age, gender, talent})
    //     .then(() =>{
    //         res.redirect('/talents')
    //     })
    // }
}

module.exports = TalentController