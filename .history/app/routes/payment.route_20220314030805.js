const express = require("express");
const { verifyTransaction } = require("../../client/src/payment/api.service");
const { getTransactions, innitiateTransaction } = require("../controllers/payments.controller");
const router = express.Router()


router.get("/get/all/transactions", getTransactions);
router.post("/initiate/transaction", innitiateTransaction);
router.post("/verify/transaction", verifyTransaction);



module.exports = router;