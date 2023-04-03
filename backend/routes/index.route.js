const router = require('express').Router();

// const applicationRoute = require('./application.route');
// const apiAuthRoute = require('./auth.route');
const resultRoute = require('./result.route');
const calendarRoute = require('./calendar.route');

// router.use('/api/appl', applicationRoute);
// router.use('/api/auth', apiAuthRoute);
router.use('/api/result', resultRoute);
router.use('/api/calendar', calendarRoute);

module.exports = router;
