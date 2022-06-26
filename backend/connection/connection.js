const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@clustersatta.duvpv.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>{
    console.log("connection succssful")
}).catch((e)=>{
    console.log(e)
})