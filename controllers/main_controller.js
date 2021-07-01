const {User, Talent}= require("../models/index");

class MainController{
    static register_Get(req, res){
        res.render('register_user.ejs',{});
    }
    static register_Post(req, res){
        const {username, password, email, name, age, gender, talent} = req.body;
        User.create({username, password, email})
        .then(() =>{
            return Talent.create({name, age, gender, talent})
        })
        .then(() =>{
            res.redirect('/login');
        })
    }
    static login_Get(req, res){
        console.log(req.session.isLogin);
        res.render('login_user.ejs',{})
    }
    static login_Post(req, res){
        req.session.isLogin = true;
        res.redirect('/login');
    }
    static logout(req, res){
        req.session.destroy;
        res.redirect('/login');
    }
}

module.exports = MainController