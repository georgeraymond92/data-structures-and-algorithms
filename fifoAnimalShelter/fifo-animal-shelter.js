"use strict";

class AnimalShelter {
  constructor() {
    this.dog = [];
    this.cat = [];
  }
  enqueue(animal) {
    if(animal === 'dog'){
      this.dog.unshift(animal);
    }else if(animal ==='cat') {
      this.cat.unshift(animal)
    }
  }
  dequeue(pref){
    if(pref === 'cat'){
      return this.cat.pop();
    }else if (pref === 'dog'){
      return this.dog.pop();
    }else{
      return null;
    }
  }
}


module.exports = AnimalShelter;