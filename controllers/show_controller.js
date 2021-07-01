const {Show, Talent, TalentShow} = require("../models/index");

class ShowController{
    static getAll(req, res){
        const {err} = req.query;
        Show.findAll({include:{model:Talent}})
        .then(data =>{
            res.render('shows.ejs', {
                data,
                req,
                err
            })
        })
    }
    static viewTalents(req, res){
        const id = req.params.id;
        Show.findOne({where:{id},include:{model:Talent}})
        .then(data =>{
            res.render('show_actors.ejs', {
                data,
                req
            })
        })
        .catch(err =>{
            console.log(err);
            res.send(err);
        })
    }
    static join(req, res){
        const show_id = req.params.id
        const talent_id = req.session.talent_id
        console.log(show_id, talent_id);
        let show = null;
        Show.findByPk(show_id)
        .then(data =>{
            show = data;
            return Talent.findByPk(talent_id)
        })
        .then(talent =>{
            if(talent.talent === show.requirement){
                return TalentShow.create({show_id, talent_id})
            }else{
                res.redirect('/shows?err=Does not meet the requirement')
            }    
        })
        .then(() =>{
            res.redirect(`/shows/${show_id}`);
        })
        .catch(err =>{
            console.log(err);
            res.send(err);
        })
    }
}

module.exports = ShowController;