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
    const { title, date, photo, description, link } = req.body;
    if (title && date) {
      const race = await RaceEvent.create({
        title,
        date,
        photo,
        description,
        link,
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
    const { title, date, photo, description, link } = req.body;
    if (title || date) {
      const race = await RaceEvent.findOne({ where: Number(id) });
      console.log(race, 'back');
      race.title = title;
      race.date = date;
      race.photo = photo;
      race.description = description;
      race.link = link;

      race.save();
      res.status(201).json(race);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.get('/race/:id/application', async (req, res) => {
  const { id } = req.params;
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
    const { id, applicationId } = req.body;
    const thisApplication = await Application.findAll({
      where: { id: Number(applicationId), raceEventId: Number(id) },
      raw: true,
    });
    const participant = await thisApplication.map(async (apl) => {
      await Participant.create({
        applicationId: apl.id,
        raceEventId: apl.raceEventId,
        groupListId: apl.groupListId,
        startNomer: apl.groupListId,
      });
    });
    res.status(201).json(participant);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.delete('/race/:id/application/:aplId', async (req, res) => {
  try {
    const { aplId } = req.params;
    const result = await Participant.destroy({
      where: { applicationId: Number(aplId) },
    });
    if (result) {
      res.status(200).json(aplId);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.get('/race/:id/participant', async (req, res) => {
  const { id } = req.params;
  try {
    const participants = await Participant.findAll({
      where: { raceEventId: Number(id) },
      include: { model: Application },
    });
    res.status(200).json(participants);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});
router.delete('/race/:id/application/:aplId/delete', async (req, res) => {
  try {
    const { aplId } = req.params;
    const result = await Application.destroy({
      where: { id: Number(aplId) },
    });
    console.log(result);
    if (result) {
      res.status(200).json(Number(aplId));
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.put('/api/lk/race/:idRace/participant/:idAppl', async (req, res) => {
  try {
    const { idAppl } = req.params;
    const { id, applicationId, input } = req.body;
    console.log(input);
    const participant = await Participant.findOne({
      where: { applicationId: Number(idAppl) },
    });
    participant.startNomer = Number(input);
    participant.save();
    res.status(201).json(participant);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.post('lk/race/:id/results', async (req, res) => {
  try {
    const { startNomer, attempt, time } = req.body;
    const thisApplication = await Participant.findOne({
      where: { startNomer: Number(startNomer), raceEventId: Number(id) },
      raw: true,
    });
    const participant = await thisApplication.map(async (apl) => {
      await Result.create({
        applicationId: apl.id,
        raceEventId: apl.raceEventId,
        groupListId: apl.groupListId,
        startNomer: apl.groupListId,
      });
    });
    res.status(201).json(participant);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
