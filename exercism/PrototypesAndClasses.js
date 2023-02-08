// prototype example
function Car(color, weight) {
  this.color = color;
  this.weight = weight;
  this.engineRunning = false;
};

const myCar = new Car("red", "2mt");
console.log(myCar.color); // => "red"

Car.prototype.startEngine = function () {
  this.engineRunning = true;
}

myCar.startEngine(); // => this function turns the status of engineRunning from false to true
console.log(myCar.engineRunning); // => true


//class example

class Car {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
    this.engineRunning = false;
  };

  startEngine(){
    this.engineRunning = true;
  };
}

const myCar = new Car("red", "2mt");
myCar.startEngine(); // => this function turns the status of engineRunning from false to true
console.log(myCar.color); // => "red"
console.log(myCar.engineRunning); // => true

/*
 * Below code is my answer of the task in exercism.
 */

//task1
function Size(width = 80, height = 60){
  this.width = width;
  this.height = height;
};

Size.prototype.resize = function(newWidth, newHeight){
  this.width = newWidth;
  this.height = newHeight;
}

const size = new Size();
console.log("task1", size.width, size.height);

size.resize(1920, 1080);
console.log("task1",size.width, size.height);


//task 2
function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function(newX, newY){
  this.x = newX;
  this.y = newY;
}

const point = new Position();
console.log("task2", point.x, point.y);
point.move(100, 200);
console.log("task2", point.x, point.y);

//task3,4,5

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  };
  resize(newSize){
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));

    this.size.resize(newWidth, newHeight);
  };
  move(newPosition){
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));

    this.position.move(newX, newY);
  };
}

//task6
export function changeWindow (programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  programWindow.resize(newSize);
  programWindow.move(newPosition);
  return programWindow;
}
