const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//handling uncaught exception

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
});
dotenv.config();
//connecitng database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

// listening to the port/page
app.listen(process.env.PORT, () => {
  console.log("server runs on " + process.env.PORT);
});

// finallay this takes all the backend and applies in front end .

//unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
