const express = require("express");
const router = express.Router()


router.get("/get/all/transactions", getTransitions);

module.exports = router;