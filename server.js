require("dotenv").config();

const mongoose = require("mongoose");

const app = require("./app");

const port = 3000;

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server Connected on ${port}`);
      console.log("MONGODB CONNECTED");
    });
  })
  .catch((e) => {
    console.log(e);
  });
