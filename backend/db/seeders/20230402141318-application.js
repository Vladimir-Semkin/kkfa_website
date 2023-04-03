'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Applications',
      [
        {
          id: 1,
          name: 'Владимир',
          email: 'vova_ta_eshe@mail.ru',
          familiya: 'Семкин',
          otchestvo: 'Незнаю',
          datarojdeniya: '01.01.1990',
          gorod: 'Ставрополь',
          phone: '89009009090',
          udostovorenieVoditel: '20139ВФ',
          licenseRAFNAF: '20139ВФ',
          medicalReport: '20139ВФ',
          markaModelAuto: 'Honda Civik',
          gosNomer: 'A000AA',
          objemDvigatelya: '4',
          tipPrivoda: 'передний',
          markaModelPokryshek: 'вот такая',
          nalichieNadduva: 'да',
          mnogodresselnyVpusk: 'да',
          izmFazyGazoraspredeleniya: 'да',
          nestandartnyVpusk: 'да',
          izmKuzova: 'нет',
          groupListId: 1,
          teamId: 1,
          startNomer: 1,
          raceEventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Applications', null, {});
  },
};
