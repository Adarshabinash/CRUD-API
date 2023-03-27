const myModel = require("../model/user_model");

module.exports = async (req, res) => {
  try {
    const myPrevData = await myModel.findById(req.params.id);
    myPrevData.name = req.body.name;
    myPrevData.age = req.body.age;
    myPrevData.email = req.body.age;
    myPrevData.coder = req.body.coder;

    const myNewData = await myPrevData.save();
    res.send(myNewData);
  } catch (error) {
    res.send("Error-" + error);
  }
};

/** The update method uses the following steps-
 * first we get the data with its id.
 * After getting the data, we change its required sections with request's body's values.
 * finally we save the new data(with the variable where it's stored) and send it as response.
 */