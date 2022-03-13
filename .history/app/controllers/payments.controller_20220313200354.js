const { getAllTransactions } = require('../services/payment.service');

const  axios = require('axios');

require("dotenv").config();

const getTransactions = async (req, res) => {

    console.log(process.env.PAYSTACK_TEST_SECRET_KEY);
    const result = getAllTransactions(req.body);
    console.log(result);
    res.status(200).send(result);
}

module.exports = {
    getTransactions
}