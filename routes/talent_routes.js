const TalentController = require('../controllers/talent_controller');

const router = require('express').Router();

const myLogger = function(req, res ,next){
    console.log(req.session.isLogin)
    if(req.session.isLogin){
        next();
    }else{
        res.redirect('/login?err=You need to login to view your schedule')
    }
}
router.get('/delete/:id', TalentController.delete)
router.get('/', TalentController.getAll);
router.get('/schedule',myLogger, TalentController.viewSchedule);

module.exports = router;