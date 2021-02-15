const fetch = require("node-fetch");
var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");

var users = [];
async function fetchUsers() {
  try {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then(function (data) {
        data.results.forEach((item) => {
          var obj = {};
          obj["name"] =
            item.name.title + " " + item.name.first + " " + item.name.last;
          obj["wealth"] = Math.floor(
            Math.random() * 10000 + Math.random() * 10000
          );
          users.push(obj);
          localStorage.setItem("users", JSON.stringify(users));
        });
        console.log("<---User details: START--->");
        console.log(users);
        console.log("<---User details: END--->");
      });
  } catch (err) {
    console.log(err);
  }
}

function doubleWealth() {
  users.forEach((item) => {
    return (item.wealth = item.wealth * 2);
  });
  console.log(users);
}

const millionaires = users.filter(function (users) {
  return users.wealth > 100000;
});

fetchUsers();

module.exports = { fetchUsers, doubleWealth };