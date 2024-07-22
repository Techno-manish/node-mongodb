const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const dotenv = require("dotenv")
const route = require("./routes/userRoute.js")

const app = express();
app.use(bodyparser.json())
dotenv.config();

const PORT = process.env.PORT || 5500;
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected successfully.");
    app.listen(PORT, ()=>{
        console.log(`Server Running at PORT ${PORT}`)
    })
})
.catch(error=>console.log(error));

app.use("/api/user", route)