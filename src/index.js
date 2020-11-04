const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const usersRoutes = require("./routes/usersRoutes");
const seedRoutes = require("./routes/seedRoutes");
const staticRoutes = require("./routes/staticRoutes");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.use("/seed", seedRoutes);

app.use("/styles", express.static(__dirname + "/styles"));
app.use("/static", express.static(__dirname + "/static"));

/* Forward all URL routes not matched above to static routes (homepage, 404...) */
app.use("/", staticRoutes);

const port = process.env.PORT || 3000;

/* Start listening of the given port */
app.listen(port, () => console.log(`Server listening on port ${port}`));
