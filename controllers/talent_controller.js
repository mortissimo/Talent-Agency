const {Show, Talent, User} = require("../models/index")

class TalentController{
    static getAll(req, res){
        Talent.findAll({include:{model:User}})
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
    static delete(req, res){
        const id = req.params.id;
        Talent.destroy({where:{id}})
        .then(() =>{
            res.redirect('/talents')
        })
    }
}

module.exports = TalentController