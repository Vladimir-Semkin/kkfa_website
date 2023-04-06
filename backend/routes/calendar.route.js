const router = require('express').Router();
const { RaceEvent, GroupPhoto } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const results = await RaceEvent.findAll({ include: { model: GroupPhoto}
    });
    res.status(200).json(results);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});
module.exports = router;
