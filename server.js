const express = require("express");
const db = require("./db/db");

const cors = require("cors");

const app = express();

const Router = require("./routes/route");
const postRouter = require("./routes/postRoute");

app.use(express.json());
app.use(cors());

app.use("/api/v1", Router);
app.use("/api/v1", postRouter);

// Start the server
app.listen(3000, () => {
  db((isConnect) => {
    if (isConnect) {
      console.log("Server is running on http://localhost:3000");
    } else {
      console.log("Server Can't Be Start...");
    }
  });
});
