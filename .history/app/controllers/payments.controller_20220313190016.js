const  axios = require('axios');

export const getTransactions = (data) => {
    console.log()
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded', "Authorization":},
        data: qs.stringify(data),
        url,
      };
      axios(options);
}