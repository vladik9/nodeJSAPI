const user = require("../../users/model/users_model");
let newUser;
exports.addUser = (id, username) => {
  newUser = new user({ id: id, username: username });
  newUser
    .save()
    .then(() => {
      console.log(newUser);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.findUsers = () => {
  user.find((err, user) => {
    if (!err) {
      user.forEach((us) => {
        console.log(us);
      });
    } else {
      console.log(err);
    }
  });
};
