function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

var min = 2
var max = 10

// getRandomInt (1.5, 10.1);
console.log(Math.random() * (max - min));

0, 1, 2, 3, 4, 5, 6, 7, 8
