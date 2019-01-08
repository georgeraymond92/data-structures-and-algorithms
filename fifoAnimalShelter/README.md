# First-in, First out Animal Shelter.
<!-- Short summary or background information -->

## Challenge
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null

## Approach & Efficiency
Create Two arrays. One for cat and one for dog. for the enqueue method unshift into the arrays and for the dequeue method pop of the arrays. I could have also imported a queue class and used two queues, utilizing their built-in enqueue and dequeue methods to handle my animal queues. We Used conditionals to either return null or an animal from the queue.

## Solution
refer to assets...