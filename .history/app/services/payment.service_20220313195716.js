
require("dotenv").config();


export const getAllTransactions = (data) => {
    try{
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json', "Authorization":process.env.PAYSTACK_TEST_SECRET_KEY},
            data: {
                email:"norbertmbafrank@gmail.com",
                amount:500,
                currency:"NGN",
                callback_url:"https://www.fisch"
            }
            url:"https://api.paystack.co/transaction"
          };
        return await axios(options);
    }catch(err){
        return {
            status:false,
            message:"couldn't get transactions",
            data:null

        }
    }
    
}



