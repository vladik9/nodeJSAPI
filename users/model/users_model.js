const mongoose = require("../../db/db");
const user = mongoose.model("User", {
  id: { type: Number, required: true },
  username: { type: String, require: true, trim: true },
});
module.exports = user;
