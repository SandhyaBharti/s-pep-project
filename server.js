const dotenv = require("dotenv").config();

const app = require("./src/app");

const connectDB = require("./src/db/db");

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`server is running at the port ${process.env.PORT}`);
    connectDB();
})


// callback function, event loop and event emmiter 