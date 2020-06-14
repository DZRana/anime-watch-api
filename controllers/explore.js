const handleApiCall = async (req, res) => {
  try {
    const results = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${req.body.input}&page=1`
    );
    return res.json(results);
  } catch (err) {
    res.status(400).json("unable to work with API");
  }
};

module.exports = {
  handleApiCall,
};
