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
    url:process.env.REACT_APP_API_UR+L"/api"+"/get/all/transactions"
  };
  
export const getAllTransactions = async () => {
    console.log(process.env.REACT_APP_API_URL)
    return await axios(options);
}