const { getAllTransactions } = require('../services/payment.service');

const  axios = require('axios');

require("dotenv").config();

const getTransactions = async (req, res) => {
    try{

    
    console.log(process.env.PAYSTACK_TEST_SECRET_KEY);
    const result = await getAllTransactions();
    console.log(result, "HErE");
    res.status(200).json({data:JSON.stringify(result)});
    }catch(err){
        res.status(401)
    }
}

module.exports = {
    getTransactions
}
