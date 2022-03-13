



export const login = (data) => {

}

export const getAllTransactions = (data) => {
    try{
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json', "Authorization":process.env.PAYSTACK_TEST_SECRET_KEY},
            data: qs.stringify(data),
            url:"https://api.paystack.co/transaction"
          };
        return await axios(options);
    }catch(err)
    
}



