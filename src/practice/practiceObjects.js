const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 24,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 18,
  },
];

const names = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);

// const names = [];
// users.forEach((user) => {
//     names.push(users.name)
// })

// const names = [];
// for (let i = 0; i < users.length; i++) {
//     if(users[i].isActive) {
//     names.push(users[i].name);
//     }
// }


