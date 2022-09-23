import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;

const app = express();

app.use(cors)

// mongoose.connect("mongodb+srv://ashok1989:ashok1989@cluster0.61xucof.mongodb.net/?retryWrites=true&w=majority")
// .then(()=>console.log("MongoDB connection is successful"))
// .catch((err)=>console.error(err));

await mongoose.connect("mongodb+srv://ashok1989:ashok1989@cluster0.61xucof.mongodb.net/?retryWrites=true&w=majority")
console.log("MongoDB connection is successful");

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(PORT,()=>{
    console.log("Server is running at http://localhost:4000");
});

