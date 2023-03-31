const router = require('express').Router();

const applicationRoute = require('./application.route');
const apiAuthRoute = require('./auth.routes');


router.use('/api/appl', applicationRoute);
router.use('/api/auth', apiAuthRoute);


module.exports = router;