const {Show, Talent, TalentShow, User} = require("../models/index");
const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: 'agencyoftalents999@gmail.com',
        pass: 'hacktiv8'
    }
})

class ShowController{
    static getAll(req, res){
        const {err} = req.query;
        Show.findAll({include:{model:Talent},order:[['schedule','ASC']]})
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
        let talent = null;
        Show.findByPk(show_id)
        .then(data =>{
            show = data;
            return Talent.findByPk(talent_id,{include:{model:User}})
        })
        .then(data =>{
            talent = data;
            if(talent.talent === show.requirement){
                return TalentShow.create({show_id, talent_id})
            }else{
                res.redirect('/shows?err=Does not meet the requirement')
            }    
        })
        .then(() =>{
            let mailOptions = {
                from : 'agencyoftalents999@gmail.com',
                to: `${talent.User.email}`,
                subject: 'INVITATION',
                text: `Welcome, You are invited to ${show.name}, we will be waiting you at ${show.schedule} `
            }
            transporter.sendMail(mailOptions, function(err, data){
                if (err){
                    console.log (err)
                }else{
                    console.log ('Sent!')
                }
            })
            res.redirect(`/shows/${show_id}`);
        })
        .catch(err =>{
            console.log(err);
            res.send(err);
        })
    }
    static show_add_Get(req, res){
        res.render('show_add.ejs',{
            req
        })
    }
    static show_add_Post(req, res){
        const {name, schedule, requirement} = req.body;
        Show.create({name, schedule, requirement})
        .then(() =>{
            res.redirect('/shows');
        })
    }
    static show_edit_Get(req, res){
        const id = req.params.id;
        Show.findByPk(id)
        .then(data =>{
            res.render('show_edit.ejs', {
                data,
                req
            })
        })
    }
    static show_edit_Post(req ,res){
        const id = req.params.id;
        const {name, schedule, requirement} = req.body;
        Show.update({name, schedule, requirement},{where:{id}})
        .then(()=>{
            res.redirect('/shows');
        })
    }
    static show_delete(req, res){
        const id = req.params.id;
        Show.destroy({where:{id}})
        .then(()=>{
            res.redirect('/shows');
        })
    }
}

module.exports = ShowController;