const router = require('express').Router();

const applicationRoute = require('./application.route');
const apiAuthRoute = require('./auth.route');


router.use('/api/application', applicationRoute);
router.use('/api/auth', apiAuthRoute);


module.exports = router;