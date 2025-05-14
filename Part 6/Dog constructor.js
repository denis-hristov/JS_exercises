function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.tricks = [];
}

Dog.prototype.learnTrick = function(trick) {
  this.tricks.push(trick);
};

Dog.prototype.performTrick = function(trick) {
  if (this.tricks.includes(trick)) {
    console.log(`${this.name} performed ${trick}!`);
  } else {
    console.log(`${this.name} doesn't know that trick.`);
  }
};


const fido = new Dog('Fido', 'poodle');

fido.learnTrick('fetch');
fido.performTrick('fetch');
fido.performTrick('sit');