const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// EVERY
// Does every character have blue eyes?
const allBlueEyed = characters.every((character) => character.eye_color === "blue");

// SOME
//Is there at least one male character?

const atLeastOneMale = characters.some((character) => character.gender === "male");

// Is there at least one character with blue eyes?

const oneBlueEyed = characters.some((character) => character.eye_color === "blue");

// Is there at least one character taller than 200?

const oneTallerThan200 = characters.some((character) => character.height > "200");

// Is there at least one character that has mass less than 50?

const oneHasMassLessThan50 = characters.some((character) => character.mass > "50");
