const router = require("./lk.route");
const storageFileupload = require('../storageFileUpload')


router.put("/", async (req, res) => {
  try {
  const file = req.files.homesImg;
  console.log(file)
  const arrUrl = await Promise.all(
    file.map(async (el) => await storageFileupload(el))
  );
  res.json(arrUrl);
} catch ({ message }) {
  res.status(500).json(console.log(message));
}
});



  module.exports= router