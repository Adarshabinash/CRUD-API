const myModel= require('../model/user_model')

module.exports = async (req, res)=>{
    try{
        let myData= await myModel.find()
        res.send(myData)
    }
    catch(err){
        res.send("Error-"+err)
    }
}

//We are using an async function to handle the promise we will get.
//when dealing with apis, we will face a lot of promises.So use asyu