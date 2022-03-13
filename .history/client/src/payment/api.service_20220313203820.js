import axios from 'axios';
require('dotenv').config()
const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json', "Authorization":"Bearer "+process.env.PAYSTACK_TEST_SECRET_KEY},
    // data: {
    //     email:"norbertmbafrank@gmail.com",
    //     amount:500,
    //     currency:"NGN",
    //     callback_url:"https://www.fischela.com",

    // },
    url:process.env.REACT_APP_AP
  };
  
export const getAllTransactions = async () => {

    return await axios(options);
}