const express = require("express");
const requestValidator = require("express-validator");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  const result = dotenv.config();
  if (result.error) {
    throw result.error;
  }
}

const { logger } = require("./utils");
const { MySQL } = require("./db");
const allRoutes = require("./routes");
const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.disable("x-powered-by");
app.use(
  morgan("dev", {
    skip: () => app.get("env") === "test",
    stream: logger.stream,
  })
);
app.use(requestValidator());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Welcome to StudyMapper!",
  });
});

// MySQL.sequelize
//   .sync()
//   .then(() => {
//     app.listen(PORT, () =>
//       logger.info(`App running at http://localhost:${PORT}`)
//     );
//   })
//   .catch((err) => logger.log("error", err));

app.listen(PORT, () => logger.info(`App running at http://localhost:${PORT}`));

app.use(allRoutes);

module.exports = app;
