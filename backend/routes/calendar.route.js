const router = require('express').Router();
const { RaceEvent, Participant } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const results = await RaceEvent.findAll({
      include: { model: Participant },
      raw: true,
    });
    res.status(200).json(results);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});
module.exports = router;
