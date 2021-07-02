const {User, Talent}= require("../models/index");
let bcrypt = require('bcryptjs');

class MainController{
    static register_Get(req, res){
        const {err} = req.query
        res.render('register_user.ejs',{
            req,
            err
        });
    }
    static register_Post(req, res){ 
        let {username, password, email, name, age, gender, talent} = req.body;
        let salt = bcrypt.genSaltSync(8);
        password = bcrypt.hashSync(password, salt);
        User.create({username, password, email})
        .then(data =>{
            return Talent.create({name, age, gender, talent, user_id: data.id})
        })
        .then(() =>{
            res.redirect('/login');
        })
        .catch(err =>{
            console.log(err);
            if(err.name === 'SequelizeValidationError'){
                let data = err.errors.map(data =>{
                    return data.message;
                })
                res.send(data);
            }else if(err.name === "SequelizeUniqueConstraintError"){
                res.redirect('/register?err=Username or Email has Already Exists')
            }else{
                res.send(err);
            }
        })
    }
    static login_Get(req, res){
        const {err} = req.query;
        res.render('login_user.ejs',{
            err,
            req
        })
        console.log(req.session.isLogin);
        console.log(req.session.user_name);
    }
    static login_Post(req, res){
        const {username, password} = req.body;
        User.findOne({where:{username}, include:{model:Talent}})
        .then(data =>{     
            if(bcrypt.compareSync(password, data.password)){
                req.session.isLogin = true;
                req.session.user_id = data.id;
                req.session.talent_id = data.Talent.id;
                req.session.talent_name = data.Talent.name;
                req.session.user_role = data.role;
                res.redirect('/shows');
            }else{
                res.session.isLogin = false;
            }
            console.log(req.session.isLogin);
        })
        .catch(err =>{
            res.redirect(`/login?err=Username and Password does not match`);
        })

    }
    static logout(req, res){
        req.session.destroy();

        res.redirect('/login');
    }
}

module.exports = MainController