
const payments = require("../controllers/payments.controller")


export const getAllTransactions = (req, res) => {
    payments.getTransactions
}