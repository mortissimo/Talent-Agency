const router = require('express').Router();
const MainController = require('../controllers/main_controller');
const talent = require('./talent_routes');
const show = require('./show_routes');

router.get('/home', (req, res) =>{
    res.render('home.ejs',{});
})
router.get('/', (req, res) =>{
    res.render('home.ejs',{});
})


router.get('/login', MainController.login_Get);
router.post('/login', MainController.login_Post);
router.get('/logout', MainController.logout);
router.get('/register', MainController.register_Get);
router.post('/register', MainController.register_Post);
router.use('/talents', talent);
router.use('/shows/', show);

module.exports = router;