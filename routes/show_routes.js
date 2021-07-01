const router = require('express').Router();
const ShowController = require('../controllers/show_controller');

const myLogger = function(req, res ,next){
    console.log(req.session.isLogin)
    if(req.session.isLogin){
        next();
    }else{
        res.redirect('/login?err=You need to login to join the Event')
    }
}

router.get('/', ShowController.getAll);
router.get('/:id', ShowController.viewTalents);
router.get('/join/:id', myLogger, ShowController.join);

module.exports = router;