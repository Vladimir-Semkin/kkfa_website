const router = require('express').Router();

const applicationRoute = require('./application.route');
const apiAuthRoute = require('./auth.route');
const resultRoute = require('./result.route');
const calendarRoute = require('./calendar.route');
const lkRoute = require('./lk.route');
const photoGroupRoute = require('./photoGroup.route');

router.use('/api/application', applicationRoute);
router.use('/api/auth', apiAuthRoute);
router.use('/api/result', resultRoute);
router.use('/api/calendar', calendarRoute);
router.use('/api/lk', lkRoute);
router.use('/api/photo', photoGroupRoute);

module.exports = router;
