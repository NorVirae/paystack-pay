const express = require("express");
const router = express.Router()


router.get("/get/all/transactions", getTransactions);

module.exports = router;