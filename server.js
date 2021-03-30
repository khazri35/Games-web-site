console.clear();
// require express
const express = require("express");
const morgan = require("morgan");
// instance express
const app = express();
// require dotenv & config
require("dotenv").config();
//  port
const PORT = process.env.PORT;

// import db
const dbConnect = require("./config/connectDB");
// DB connect
dbConnect();

// middleware morgan
app.use(morgan("common"));
// middleware body parse
app.use(express.json());
// route
app.use("/api/game", require("./routes/games"));
app.use("/api/user", require("./routes/users"));
app.use("/api/panel", require("./routes/panels"));
// create server
app.listen(PORT, (error) => {
  error
    ? console.error("server not run ${error}")
    : console.log(`server is running at http://localhost:${PORT}`);
});
