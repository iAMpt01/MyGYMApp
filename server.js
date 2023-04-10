import express from "express";
import {readdirSync} from "fs";
import cors from 'cors'; //for db
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();

const app = express();

//db
const uri = "mongodb+srv://trifpatricia:Barbie01@gymapp.rlvkqdz.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try{
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
}  catch(error) {
    console.error(error);
}
}
connect();


//mongoose
//.connect(process.env.DATABASE, {
    //useNewUrlPsrser: true,
   /// useUnifiedTopology: true

//})
//.then(() => console.log('DB Connected'))
//.catch((err) => console.log("DB Connection Error: ", err));


//middlewares
app.use(cors());

//route middleware
//readdirSync("./routes").map((r)=> app.use("/api", require('./routes/hello')));

//const port = process.env.PORT || 8000;

app.listen(8000, () => console.log("server is running on port 8000"));


