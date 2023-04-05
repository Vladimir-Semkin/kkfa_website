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

module.exports = router;
