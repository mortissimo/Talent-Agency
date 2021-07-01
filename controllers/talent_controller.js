const {Show, Talent} = require("../models/index")

class TalentController{
    static getAll(req, res){
        Talent.findAll()
        .then(data =>{
            res.render('talent.ejs', {
                data,
                req
            })
        })
    }
    static viewSchedule(req, res){
        const talent_id = req.session.talent_id
        Talent.findByPk(talent_id,{include:{model:Show}})
        .then(data =>{
            res.render('talent_schedule.ejs',{
                data,
                req
            })
        })  
    }
}

module.exports = TalentController