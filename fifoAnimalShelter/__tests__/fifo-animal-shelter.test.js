'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('stack', () => {

  it('returns a cat when you dequeue a cat', () => {
    let animalShelterQueue = new AnimalShelter()
    animalShelterQueue.enqueue('dog');
    animalShelterQueue.enqueue('cat');
    animalShelterQueue.enqueue('pizza');
    expect(animalShelterQueue.dequeue('cat')).toEqual('cat');

  })

  it('returns a dog when you dequeue a dog', () => {
    let animalShelterQueue = new AnimalShelter()
    animalShelterQueue.enqueue('dog');
    animalShelterQueue.enqueue('cat');
    animalShelterQueue.enqueue('pizza');
    expect(animalShelterQueue.dequeue('dog')).toEqual('dog');
  });

  it('to return null if asked to dequeue something that is not in the animal shelter' , () => {
    let animalShelterQueue = new AnimalShelter()
    expect(animalShelterQueue.dequeue('thing')).toEqual(null);
  })


  it('should have emptied my dog queue' , () => {
    let animalShelterQueue = new AnimalShelter()
    animalShelterQueue.enqueue('dog');
    animalShelterQueue.enqueue('cat');
    animalShelterQueue.enqueue('pizza');
    animalShelterQueue.dequeue('dog');
    expect(animalShelterQueue.dog.length).toEqual(0);
  });

  it('should have emptied my cat queue' , () => {
    let animalShelterQueue = new AnimalShelter()
    animalShelterQueue.enqueue('dog');
    animalShelterQueue.enqueue('cat');
    animalShelterQueue.enqueue('pizza');
    animalShelterQueue.dequeue('cat');
    expect(animalShelterQueue.cat.length).toEqual(0);
  });

});