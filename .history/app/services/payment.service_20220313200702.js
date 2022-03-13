
require("dotenv").config();

const getAllTransactions = async (data) => {
    console.log(process.env.PAYSTACK_TEST_SECRET_KEY, "from services")

    try{
        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/json', "Authorization":"Bearerprocess.env.PAYSTACK_TEST_SECRET_KEY},
            // data: {
            //     email:"norbertmbafrank@gmail.com",
            //     amount:500,
            //     currency:"NGN",
            //     callback_url:"https://www.fischela.com",

            // },
            url:"https://api.paystack.co/transaction"
          };
          const result = await axios(options);
        return result;
    }catch(err){
        return {
            status:false,
            message:"couldn't get transactions",
            data:null

        }
    }
    
}

module.exports = {
    getAllTransactions
}



