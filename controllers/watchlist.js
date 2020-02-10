const handleWatchlistUpdate = (req, res, db) => {
  const { id, watchlistData } = req.body;
  db("users")
    .where("id", "=", id)
    .update({
      watchlist_data: watchlistData
    })
    .returning("watchlist_data")
    .then(watchlist_data => {
      res.json(watchlist_data);
    })
    .catch(err => res.status(400).json("error updating user watchlist"));
};

module.exports = {
  handleWatchlistUpdate
};
