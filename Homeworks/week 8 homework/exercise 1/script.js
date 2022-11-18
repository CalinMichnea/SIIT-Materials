const checkNumber = (a) => {
  if (a % 2 === 0) {
    console.log(a + " is an even number");
  } else {
    console.log(a + " is an odd number");
  }
};

const number = checkNumber(300000);

const sumOfNumbers = (...arguments) => {
  let sum = 0;
  for (const arg of arguments) {
    sum += arg;
  }
  return sum;
};

const numbers = sumOfNumbers(100, 100, 100, 100, 1230);
console.log(numbers);
