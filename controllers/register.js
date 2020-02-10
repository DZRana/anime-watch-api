const handleRegister = (req, res, db, bcrypt) => {
  const { name, email, password, watchlistData } = req.body;
  if (
    !email ||
    !email.includes("@") ||
    !email.includes(".com") ||
    !name ||
    !password
  ) {
    return res.status(400).json("incorrect form submission");
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  db.transaction(trx => {
    trx
      .insert({
        hash: hash,
        email: email
      })
      .into("login")
      .returning("email")
      .then(loginEmail => {
        return trx("users")
          .returning("*")
          .insert({
            name: name,
            email: loginEmail[0],
            joined: new Date(),
            watchlist_data: watchlistData
          })
          .then(user => {
            res.json(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => {
    res.status(400).json("unable to register");
  });
};

module.exports = {
  handleRegister
};
