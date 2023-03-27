const myModel = require("../model/user_model");

module.exports = async (req, res) => {
  try {
    let myData = await myModel.findById(req.params.id);
    res.send(myData);
  } catch (err) {
    res.send("Error-" + err);
  }
};

//Here we are using an id parameter.
//when we will pass an id to retrieve a datum, params will process it and get us the results.