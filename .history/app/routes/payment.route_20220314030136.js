const express = require("express");
const { getTransactions, innitiateTransaction } = require("../controllers/payments.controller");
const router = express.Router()


router.get("/get/all/transactions", getTransactions);
router.post("/initiate/transaction", innitiateTransaction);
router.post("/initiate/transaction", innitiateTransaction);



module.exports = router;