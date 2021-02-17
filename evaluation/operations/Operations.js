/* eslint-disable no-loop-func */
const fetch = require('node-fetch');
const userOps = require('../users/Users');

const fetchUsers = (numberOfUsers) => {
  let users = userOps.getUsers();
  let count = 0; // to keep track of the number of users fetched
  for (let i = 0; i < numberOfUsers; i += 1) {
    fetch('https://randomuser.me/api')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`No user fetched! ${response.status}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        const user = jsonResponse.results;
        users = users.concat(user);
        count += 1;
        if (count === numberOfUsers) {
          userOps.saveUsers(users);
        }
      })
      .catch((error) => error);
  }
};

module.exports = {
  fetchUsers,
};
