const jikanjs = require("jikanjs");

const handleApiCall = async (req, res) => {
  try {
    const results = await jikanjs.search("anime", req.body.input);
    return res.json(results);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  handleApiCall
};
