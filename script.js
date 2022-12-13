function sayKek(){
	console.log("kek")
}

sayKek();

class Main {
  constructor (name) {
    this.name = name;
  }
}

class User extends Main {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

let testik = new User ("Dave", 27);
console.log(testik);
