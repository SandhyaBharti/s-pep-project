//it does:- just connect my mongodb server.

const mongoose = require("mongoose");
// const { DB_NAME } = require("../constants.js");
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("Mongo DB connected successfully!")
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}
module.exports = connectDB;