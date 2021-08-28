const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/RestApi", {
  useNewUrlParser: true, // use params to pass deprication
  useUnifiedTopology: true,
});
module.exports = mongoose;
