const jikanjs = require("jikanjs");

const handleApiCall = async (req, res) => {
  try {
    const results = await jikanjs.search("anime", req.body.input);
    return res.json(results);
  } catch (err) {
    res.status(400).json("unable to work with API");
  }
};

module.exports = {
  handleApiCall,
};
