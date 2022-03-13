const  axios = require('axios');

require("dotenv").config();

export const getTransactions = async (req, res) => {
    console.log(process.env.PAYSTACK_TEST_SECRET_KEY);
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json', "Authorization":process.env.PAYSTACK_TEST_SECRET_KEY},
        data: qs.stringify(data),
        url:"https://api.paystack.co/transaction"
      };
    return await axios(options);
}