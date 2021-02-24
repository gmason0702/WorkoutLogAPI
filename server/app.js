require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");

let workoutlog = require("./controllers/log-controller");
let user = require("./controllers/user-controller");

sequelize.sync();

app.use(require("./middleware/headers"));

app.options("*", (req, res) => {
  res.json({
    status: "OK",
  });
});
app.use(express.json());

app.use("/user", user);

app.use(require("./middleware/validate-session"));

app.use("/workoutlog", workoutlog);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
