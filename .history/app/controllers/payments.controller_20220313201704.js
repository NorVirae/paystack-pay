const { getAllTransactions } = require('../services/payment.service');

const  axios = require('axios');

require("dotenv").config();

const getTransactions = async (req, res) => {

    console.log(process.env.PAYSTACK_TEST_SECRET_KEY);
    const result = await getAllTransactions();
    console.log(result, "HE");
    res.status(200).json({result});
}

module.exports = {
    getTransactions
}
