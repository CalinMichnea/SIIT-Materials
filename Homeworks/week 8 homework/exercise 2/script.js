const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};

//destructurati name
const { name } = person;
console.log(name);

//clonati person
const clonedPerson = { ...person };
console.log(clonedPerson);

const car = {
  name: "Toyota",
  settings: {
    color: "white",
    doors: 5,
  },
};

//destructurati color si doors
const {
  settings: { color, doors },
} = car;
console.log("color is " + color + " Number of doors is " + doors);

//clonati obiectul car
const clonedCar = { ...car };
console.log(clonedCar);

//Clonati obiect car, pe care-l mergeuim cu modelYear: 2022 si alte settings - wheels, engine
const upgradedCar = {
  ...clonedCar,
  modelYear: 2022,
  settings: {
    ...car.settings,
    wheels: 4,
    engine: "3.0 TDI",
  },
};

console.log(upgradedCar);
