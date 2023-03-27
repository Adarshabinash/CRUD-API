const express = require("express");
const router = express.Router();
const myModel = require("./model/user_model");

//To get all the data from the database-
router.get("/", require("./routers/getAll"));

//To get a single data with given id-
router.get("/:id", require("./routers/getById"));

//To post a data to our database-
router.post("/", require("./routers/postData"));

//To update a data given its id-
router.patch("/:id", require("./routers/updatedata"));

//To delete a data given its id-
router.delete("/:id", require("./routers/deleteData"));

module.exports = router;

//Our routers are required to handle the api call by the user.
//We use the express.Router() to invoke the router command.
//We will get functions like Get, Post, Patch(can use Put also..) and Delete.
//using these methods we get to handle the apis.
