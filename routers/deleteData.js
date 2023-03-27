const myModel = require("../model/user_model");

module.exports = async (req, res) => {
  try {
    const deleteThis = await myModel.findByIdAndDelete(req.params.id);
    res.send(deleteThis);
  } catch (error) {
    res.send("Error-" + error);
  }
};

/**The delete method follows these steps-
 * We call the model and check and delete simultaneously using findByIdAndDelete method.
 */
