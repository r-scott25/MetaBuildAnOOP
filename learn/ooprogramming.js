// Task 1: Code a Person class

class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class

class Worker extends Person {
    constructor(exp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.exp = exp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.exp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker(0, 10, "Bob", 21, 110);
    intern.goToWork();
    return (intern);
}
console.log(intern());

// Task 4: Code a manager object, methods
function manager() {
    // var manager = new Worker("Alice", 30, 120, 100, 30);
    var manager = new Worker(100, 30, "Alice", 30, 120)
    manager.doSomethingFun();
    return (manager);
}
console.log(manager());
