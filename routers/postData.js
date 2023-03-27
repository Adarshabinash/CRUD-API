const myModel = require("../model/user_model");

module.exports = async (req, res) => {
  const newUser = new myModel({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    coder: req.body.coder,
  });

  try {
    const addUser = await newUser.save();
    res.send(addUser);
  } catch (error) {
    res.send("Error-" + error);
  }
};

/** In the post method in the router, the following operations are done-
 * First we are calling our model and in that we are passing what data we want to post.
 * To post the data, we have to pass the data according to the model.
 * To resolve the promise, we have to await the passed data and use the save method.
 * Finally we have to send that in response
 */
