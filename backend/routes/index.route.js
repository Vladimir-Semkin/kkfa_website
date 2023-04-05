const router = require('express').Router();

// const applicationRoute = require('./application.route');
const apiAuthRoute = require('./auth.route');
const raceRoute = require('./race.route');
const calendarRoute = require('./calendar.route');
const lkRoute = require('./lk.route');

// router.use('/api/application', applicationRoute);
router.use('/api/auth', apiAuthRoute);
router.use('/api/race', raceRoute);
router.use('/api/calendar', calendarRoute);
router.use('/api/lk', lkRoute);

module.exports = router;
