console.log("Israel");

class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }

  hunt() {
    this.food += 2;
  }
  eat() {
    if (this.food === 0) {
      this.isHealthy = false;
    } else {
      this.food -= 1;
    }
  }
}
class Wagon {
  constructor(capacity) {
    this.passengers = [];
    this.capacity = 2;
  }
  getAvailableSeatCount() {
    let availableSeats = this.capacity - this.passengers.length;
    return availableSeats;
  }

  join(traveler) {
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(traveler);
    }
  }

  shouldQuarantine() {
    for (var i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].isHealthy === false) {
        return true;
      } else {
        return "No need to Quarantine"; 
      }
    }
  }

  totalFood() {
    let sum = 0;
    for (var i = 0; i < this.passengers.length; i++) {
      sum += this.passengers[i].food;
      // console.log(this.passengers[i].food);
    }
    console.log(sum);
    return sum;
  }
}

// let car = new Wagon("car");
// let maria = new Traveler("Maria");
// let israel = new Traveler("Israel");
// let jack = new Traveler("Jack");
// israel.hunt();
// console.log(israel);
// israel.eat(israel);
// console.log(israel);
// // car.join(israel);
// // console.log(israel);
// // car.getAvailableSeatCount(car);
// // console.log(car);
// // car.join(maria);
// // console.log(maria);
// // car.getAvailableSeatCount(car);
// // console.log(car);
// // car.join(jack);
// // console.log(jack);
// newwagon.join("maria");
// console.log(wagon);
// wagon.join("israel");
// console.log(wagon);
// wagon.join("jack");
// console.log(wagon);
