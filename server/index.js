const express = require("express");
const cors = require("cors");   // <-- add this

const app = express();
const pool =require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES //

//create a todo
app.post("/todos ",(req,res)=>{
    try{

    }catch(err){
        console.error(err.message);
    }
})

// get all todos 

//get a todo

//update a todo

//delete a todo


app.listen(5000, () => {
   console.log("Server has started on port 5000");
});
