import axios from 'axios';

const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json', "Authorization":"Bearer "+process.env.PAYSTACK_TEST_SECRET_KEY},
    // data: {
    //     email:"norbertmbafrank@gmail.com",
    //     amount:500,
    //     currency:"NGN",
    //     callback_url:"https://www.fischela.com",

    // },
    url:"https://api.paystack.co/transaction"
  };
  
export const getAllTransactions = async () => {

    return await axios(options);
}