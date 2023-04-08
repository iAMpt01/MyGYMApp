import express from "express";
import router from "./routes/auth";

const app = express();

//route middleware
app.use("/api",router);


app.listen(8000, () => console.log('server is running on port 8000'));


