const client = require("../database/client");

const UserController = {
  getAll: (req, res) => {
    client
      .query("SELECT * FROM users")
      .then((data) => res.json(data.rows))
      .catch((e) => console.log(e));
  },
  getSingleUser: (req, res) => {
    res.json(req.user);
  },
  createUser: (req, res) => {
    const { firstname, lastname } = req.body;

    const sqlQuery = `
    INSERT INTO users(firstname, lastname)
    VALUES ($1, $2)
    RETURNING *
    `;

    const values = [firstname, lastname];

    client
      .query(sqlQuery, values)
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err));
  },
  updateUser: (req, res) => {
    const { id } = req.params;
    const { firstname, lastname } = req.body;

    if (!firstname || !lastname) return res.sendStatus(400);

    const sqlQuery = `
    UPDATE users 
    SET firstname=$1, 
    lastname=$2
    WHERE id=$3
    RETURNING *
    `;

    const values = [firstname, lastname, id];

    client
      .query(sqlQuery, values)
      .then((data) => res.json(data.rows))
      .catch((e) => {
        console.log(e);
        res.sendStatus(500);
      });
  },
  deleteUser: (req, res) => {
    const { id } = req.params;

    const sqlQuery = `
    DELETE FROM users 
    WHERE id=$1
    RETURNING *
    `;

    client
      .query(sqlQuery, [id])
      .then((data) => res.json(data.rows))
      .catch((e) => {
        res.sendStatus(500);
        console.log(e);
      });
  }
};

module.exports = UserController;
