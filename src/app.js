const express = require( "express");
require("./db/conn");
const app = express();
const Student =require("./models/students")
const port=process.env.PORT||5000;

app.use(express.json())

app.get('/',(req,res)=>
    res.send("this page is runing")

)
app.post('/students',(req,res)=>{
const user = new Student (req.body)
user.save().then(()=>{
    res.status(200).send(user);
}).catch((error)=>{
    res.status(400).send(error.message);
})
}
);
app.listen(port,()=> console.log(`Server is runnning on localhost at port ${port}`));