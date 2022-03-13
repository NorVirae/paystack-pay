
const payments = require("../controllers/payments.controller")


export const getAllTransactions = (req, res) => {
    payments.getTransactions(req.body);
    res.status(200).send({
        message:"Payment fetch successful",
        status:true
    })
}