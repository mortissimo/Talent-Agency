const TalentController = require('../controllers/talent_controller');

const router = require('express').Router();

router.get('/', TalentController.getAll);

module.exports = router;