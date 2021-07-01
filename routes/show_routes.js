const router = require('express').Router();
const ShowController = require('../controllers/show_controller');

router.get('/', ShowController.getAll);

module.exports = router;