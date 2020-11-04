// Reset seed data (or initialize it on a new ElephantSQL instance)
const client = require("../database/client");

const seedController = {
  recreate: (req, res, next) => {
    const sqlQuery = `
    DROP TABLE IF EXISTS users;
    CREATE TABLE users (id SERIAL PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255));
    INSERT INTO users (firstname, lastname) VALUES 
    ('Imogen', 'Drews'),
    ('Martin', 'Fleskes'),
    ('Rosmalina', 'Abrell'),
    ('Alejandra', 'Jimenez'),
    ('Istayfo', 'Ergun'),
    ('Kenechukwu', 'Okoye');
    `;
    client
      .query(sqlQuery)
      .then(() => {
        console.log("Demo content recreated");
        next();
      })
      .catch((e) => console.log(e));
  }
};

module.exports = seedController;
