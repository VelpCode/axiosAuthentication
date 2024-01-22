

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://velpmail:velpass@cluster0.2p6ajvb.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("mongo up!")
})
.catch(() => {
    console.log("failed")
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports=collection