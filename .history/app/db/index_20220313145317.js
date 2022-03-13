const mongoose = require('mongoose');
require('dotenv').config()

console.log(process.env.DATABASE)
module.exports = 
    mongoose.connect(
        //'mongodb://localhost/graphit'
        process.env.DATABASE,
    
         {
        
            useNewUrlParser:true,
            useUnifiedTopology:true,
    
        
    }).then(res=>{
        console.log("mongoose kinda connected successfully is that a problem?")
    }).then(err=>{
        console.log(err)
    })
