const router = require('express').Router();
const { RaceEvent, Participant, Application } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const results = await RaceEvent.findAll({
      raw: true,
    });
    res.status(200).json(results);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, date, photo, description } = req.body;
    if (title && date) {
      const race = await RaceEvent.create({
        title,
        date,
        photo,
        description,
      });
      res.status(201).json(race);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await RaceEvent.destroy({ where: { id } });
    if (result) {
      res.status(200).json(id);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date, photo, description } = req.body;
    if (title || date) {
      const race = await RaceEvent.findOne({ where: Number(id) });
      console.log(race, 'back');
      race.title = title;
      race.date = date;
      race.photo = photo;
      race.description = description;
      race.save();
      res.status(201).json(race);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.get('/race/:id/application', async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    const results = await Application.findAll({
      where: { raceEventId: Number(id) },
      raw: true,
    });
    res.status(200).json(results);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});
router.post('/race/:id/application', async (req, res) => {
  try {
    const { title, date } = req.body;
    if (title && date) {
      const race = await RaceEvent.create({
        title,
        date,
      });
      res.status(201).json(race);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
