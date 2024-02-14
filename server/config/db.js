const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.CONN_STR);

    console.log(`DB Connection Successfull: ${connection.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
