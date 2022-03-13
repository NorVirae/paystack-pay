const express = require("express");
const { getTransactions } = require("../controllers/payments.controller");
const router = express.Router()


router.get("/get/all/transactions", getTransactions);
router.post("/initiate/transactions", getTransactions);


module.exports = router;