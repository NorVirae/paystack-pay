const  axios = require('axios');

export const getTransactions = (data) => {
    console.log(process.env.PAYSTACK_TEST_SECRET_KEY);
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded', "Authorization":},
        data: qs.stringify(data),
        url,
      };
      axios(options);
}