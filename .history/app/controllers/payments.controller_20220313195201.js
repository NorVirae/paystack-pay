const  axios = require('axios');

require("dotenv").config();

export const getTransactions = async (req, res) => {
    
    console.log(process.env.PAYSTACK_TEST_SECRET_KEY);
    
}