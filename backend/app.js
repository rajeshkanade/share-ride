const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/db");
const app = express();
const bodyParser = require("body-parser")

const userRoutes = require("./routes/user.routes");


app.use(cors());
connectToDb();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{  
    res.send("I am working ...");
})

app.use("/users",userRoutes);


module.exports = app;
