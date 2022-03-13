
const payments = require("../controllers/payments.controller")


export const getAllTransactions = (req, res) => {
    payments.getTransactions(req.body);
    res.status.send({
        message:"Payment fetch successful",
        status:true
    })
}