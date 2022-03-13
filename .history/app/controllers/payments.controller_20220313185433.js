const  axios = require('axios');

export const getTransactions = (data) => {
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url,
      };
      axios(options);
}