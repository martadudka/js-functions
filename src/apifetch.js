const url = "https://api.github.com/users/ascandone";

const promise = fetch(url);
const x = promise
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
  });

fetch(url)
  .then((response) => response.json())
  .then((user) => {
    console.log(user);
  });
