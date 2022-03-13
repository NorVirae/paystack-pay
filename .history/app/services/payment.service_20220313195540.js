
require("dotenv").config();


export const getAllTransactions = (data) => {
    try{
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json', "Authorization":process.env.PAYSTACK_TEST_SECRET_KEY},
            data: {
                email:"norbertmbafrank@"
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



