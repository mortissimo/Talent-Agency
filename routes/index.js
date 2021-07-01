const router = require('express').Router();
const talent = require('./talent_routes');

router.use('/talents', talent)

module.exports = router;