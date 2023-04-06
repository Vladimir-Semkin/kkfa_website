const router = require('./lk.route');
const storageFileupload = require('../storageFileUpload');
const { GroupPhoto } = require('../db/models');

router.get('/', async (req, res) => {
  try{
    const results = await GroupPhoto.findAll({
      raw: true
    });
res.status(200).json(results)
  } catch({message}) {
    res.status(500).json(message);
  }
})

router.put('/', async (req, res) => {
  try {
    const id = req.body.id;
    const file = req.files.homesImg;

    const arrUrl = await Promise.all(
      file.map(async (el) => await storageFileupload(el))
    );
  const groupPhoto = arrUrl.forEach(
      async (el) =>
        await GroupPhoto.create({
          raceeventId: Number(id),
          photo: el,
        })
    );
    res.json(groupPhoto);
  } catch ({ message }) {
    res.status(500).json(console.log(message));
  }
});

module.exports = router;
