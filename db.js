const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Unable to connect to the database.");
    console.log(error);
  }
};
