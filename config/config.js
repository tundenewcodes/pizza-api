const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect(url);
    console.log(
      `Mongodb DataBase Connected! ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
};

module.exports = connectDB;
