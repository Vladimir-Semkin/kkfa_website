const router = require('express').Router();
// const { Application } = require('../db/models');

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
    // if (
    //   name &&
    //   email &&
    //   familiya &&
    //   otchestvo &&
    //   datarojdeniya &&
    //   gorod &&
    //   phone &&
    //   udostovorenieVoditel &&
    //   licenseRAFNAF &&
    //   medicalReport &&
    //   markaModelAuto &&
    //   objemDvigatelya &&
    //   tipPrivoda &&
    //   nalichieNadduva &&
    //   mnogodresselnyVpusk &&
    //   izmFazyGazoraspredeleniya &&
    //   nestandartnyVpusk &&
    //   izmKuzova &&
    //   groupListId &&
    //   raceEventId
    // ) {
      // const application = await Application.create({
      //   name,
      //   email,
      //   familiya,
      //   otchestvo,
      //   datarojdeniya,
      //   gorod,
      //   phone,
      //   udostovorenieVoditel,
      //   licenseRAFNAF,
      //   medicalReport,
      //   markaModelAuto,
      //   gosNomer,
      //   objemDvigatelya,
      //   tipPrivoda,
      //   markaModelPokryshek,
      //   nalichieNadduva,
      //   mnogodresselnyVpusk,
      //   izmFazyGazoraspredeleniya,
      //   nestandartnyVpusk,
      //   izmKuzova,
      //   groupListId,
      //   team,
      //   ispolzovanieAutoDrugimi,
      //   startNomer,
      //   raceEventId,
      // });
      console.log(req.body);
      res.json(application);
    // }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
