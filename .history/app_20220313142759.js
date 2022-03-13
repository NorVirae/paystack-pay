const express = require('express');




const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        status:true,
        message:"Server by Vyrae",
        data:null
    })
})

const port = process.env.PORT ||


app.listen(port, ()=>{
    console.log("Server Started at Port ")
})