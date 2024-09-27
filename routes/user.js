const express = require("express");
const router = express.Router();
const {createUser} = require("../controller/registercontroller");

router.post('/register', createUser);

module.exports = router;