
function Car(name, year, age) {
  this. name = name
  this. year = year
  this. age = age
};

Car.prototype.getAge = function () {
  return new Date().getFullYear() - this.year
}
// Car.prototype.color = 'black'
var ford = new Car('Ford', 2015, 19);
var bmw = new Car('bmw', 2017, 20);

bmw.color = 'red'
console.log(ford)
console.log(bmw)
