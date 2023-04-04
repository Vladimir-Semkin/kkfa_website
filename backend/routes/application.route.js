const router = require('express').Router();
const { Application } = require('../db/models');

router.post('/', async (req, res) => {
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

    console.log(req.body);
if(groupListId >= 1 ) { groupListId.forEach(async (el) => {
    const application = await Application.create({
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
      groupListId: Number(el),
      team: Number(team),
      ispolzovanieAutoDrugimi,
      startNomer: Number(startNomer),
      raceEventId: Number(raceEventId),
    });
    res.json(application);
  }
    )}
  } catch ({ message }) {
    res.status(500).json(console.log(message));
  }
});

module.exports = router;
