console.log("Israel");

class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }

  hunt() {
    this.food += 1;
  }
  eat() {
    this.food -= 1;
    if (this.food === 0) return (this.isHealthy = false);
  }
}
class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount() {}
  join(traveler) {}
  shouldQuarantine() {}
  totalFood() {}
}

let israel = new Traveler("israel");

israel.hunt();
console.log(israel);
israel.eat(israel);
console.log(israel);
