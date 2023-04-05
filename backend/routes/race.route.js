const router = require('express').Router();
const { Participant, Result, Application } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const results = await Application.findAll({
      include: { model: Participant, include: { model: Result } },
      raw: true,
    });
    res.status(200).json(results);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/registration/:id', async (req, res) => {
  try {
    const {
      name,
      email,
      familiya,
      otchestvo,
      datarojdeniya,
      gorod,
      phone,
      udostovorenieVoditel,
      licenseRAFNAF,
      medicalReport,
      markaModelAuto,
      gosNomer,
      objemDvigatelya,
      tipPrivoda,
      markaModelPokryshek,
      nalichieNadduva,
      mnogodresselnyVpusk,
      izmFazyGazoraspredeleniya,
      nestandartnyVpusk,
      izmKuzova,
      groupListId,
      team,
      ispolzovanieAutoDrugimi,
      startNomer,
      raceEventId,
    } = req.body;

    const application = await groupListId.map(async (groupId) => {
      await Application.create({
        name,
        email,
        familiya,
        otchestvo,
        datarojdeniya,
        gorod,
        phone,
        udostovorenieVoditel,
        licenseRAFNAF,
        medicalReport,
        markaModelAuto,
        gosNomer,
        objemDvigatelya,
        tipPrivoda,
        markaModelPokryshek,
        nalichieNadduva,
        mnogodresselnyVpusk,
        izmFazyGazoraspredeleniya,
        nestandartnyVpusk,
        izmKuzova,
        groupListId: Number(groupId),
        team: Number(team),
        ispolzovanieAutoDrugimi,
        startNomer: Number(startNomer),
        raceEventId,
      });
    });

    res.json(application);
  } catch ({ message }) {
    res.status(500).json(console.log(message));
  }
});

module.exports = router;
