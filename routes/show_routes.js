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
router.get('/add', ShowController.show_add_Get);
router.post('/add', ShowController.show_add_Post);
router.get('/edit/:id', ShowController.show_edit_Get);
router.post('/edit/:id', ShowController.show_edit_Post);
router.get('/delete/:id', ShowController.show_delete);
router.get('/join/:id', myLogger, ShowController.join);
router.get('/:id', ShowController.viewTalents);



module.exports = router;