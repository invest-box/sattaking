const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sattabazar:sattabazar321@cluster0.wcqfh.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>{
    console.log("connection succssful")
}).catch((e)=>{
    console.log(e)
})