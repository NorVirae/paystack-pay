const  axios = require('axios');

require("dotenv").config();

export const getTransactions = async (data) => {
    console.log(process.env.PAYSTACK_TEST_SECRET_KEY);
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json', "Authorization":process.env.PAYSTACK_TEST_SECRET_KEY},
        data: qs.stringify(data),
        url:"https://api.paystack.co/transaction"
      };
    axios(options);
}