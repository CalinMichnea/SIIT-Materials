//Creati cate 2 exemple pentru mostenire si compozitie folosindu-va de domeniul vostru de activitate sau unul preferat. (puteti folosi orice referinta).

//Inheritance example 1:

class VideoGame {
  constructor(name) {
    this.name = name;
  }
  play() {
    console.log(this.name + " starts the game");
  }
}

class Moba extends VideoGame {
  constructor(name) {
    super(name);
  }
}
const game = new Moba("World of Warcraft");
console.log(game);
game.play();

//Inheritance example 2:

function VideoGames(name) {
  this.name = name;
}
VideoGames.prototype.play = function () {
  console.log(this.name + " starts the game");
};

function Rpg(name) {
  VideoGames.call(this, name);
}

Rpg.prototype = Object.create(VideoGames.prototype);
const games = new Rpg("Cabal");
games.play();
console.log(games);

//Composition example :

const start = (atributes) => ({
  start: () => console.log("Engine has started for " + atributes.name),
});

const drive = (atributes) => ({
  drive: () =>
    console.log((atributes.speed = "Current km/h is " + atributes.speed)),
});

const sportsCar = (name) => {
  let atributes = {
    name,
    speed: 100,
    oilTemperature: 60,
  };
  return Object.assign({}, start(atributes), drive(atributes));
};

const car = sportsCar("BMW");
car.start();
car.drive();

//Creati cate o de functie si apelarea sa pentru urmatoarele cazuri (pentru a intelege):cate o functie care primeste cate un parametru: integer, string, object, array, callback

const myFunction = (int, str, obj, arr, callback) => {
  console.log("Integer is: " + int);
  console.log("String is: " + str);
  console.log("Object is: " + JSON.stringify(obj));
  console.log("Array is: " + arr);

  callback();
};

myFunction(
  100,
  "Parameters example",
  { game: "mmorpg" },
  [10, 9, 8, 7, 6],
  function () {
    console.log("Call back function parameter called");
  }
);

//o functie care accepta un numar nedefinit de argumente care returneaza suma lor

const sum = (...arguments) => {
  let sumResult = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumResult += arguments[i];
  }
  console.log(sumResult);
};

sum(1, 22, 123, 32, 45);
sum(10, 20, 30);

//o functie care accepta un boolean si retuneaza un promise, resolve  cu o valoare daca booleanul este true si rejected daca este false cu alta valoare, prindeti ce returneaza functia si afisati cu console.log valoarea

const booleanFunction = (value) => {
  return new Promise((resolve, reject) => {
    if (value) {
      resolve("The boolean is value is true");
    } else {
      reject("The boolean value is false.");
    }
  });
};

booleanFunction(true)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

booleanFunction(false)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
