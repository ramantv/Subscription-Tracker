const usersArray = [
  ['Pat', 'Mahomes', 'mahomes@nomail.com', '123abc'],
];


let usersList = [];

usersArray.forEach((user) => {
  const userObj = {
    firstName: user[0],
    lastName: user[1],
    email: user[2],
    password: user[3],
  };

  usersList = [...usersList, userObj];
});

module.exports = usersList;
