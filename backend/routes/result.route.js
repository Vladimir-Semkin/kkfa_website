const router = require('express').Router();
const { Participant, Result, Application } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const results = await Application.findAll({
      include: { model: Participant, include: { model: Result } },
      raw: true,
    });
    console.log(results);
    res.status(200).json(results);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});
module.exports = router;
