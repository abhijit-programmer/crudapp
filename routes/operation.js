const express = require("express");
const router = express.Router();

const {create, list, createUser, getAllUsers, deleteUser} = require("../controllers/operation");

router.get("/", create);

// show
router.get("/list", getAllUsers, list);

// create
router.post("/createUser", createUser);

// delete 
router.get("/delete/:userID", deleteUser)

module.exports = router;