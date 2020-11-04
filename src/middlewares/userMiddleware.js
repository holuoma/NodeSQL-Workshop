const client = require("../database/client");

module.exports = {
  checkUser: (req, res, next) => {
    const { id } = req.params;
    client
      .query("SELECT * FROM users WHERE id=$1", [id])
      .then((data) => {
        if (!data.rows[0]) return res.sendStatus(404);
        req.user = data.rows[0];
        next();
      })
      .catch((e) => console.log(e));
  }
};
