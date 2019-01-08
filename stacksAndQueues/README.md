# Implement a Queue using two Stacks.
<!-- Short summary or background information -->

## Challenge
implement a new queue class that has working methods of enqueue and dequeue. The class should use to stacks to create the functionality of a queue.

## Approach & Efficiency
We first defined two stacks to handle the data. On enqueue, push the given value into stackOne. On dequeue we use a while loop to push all of the values from stackOne into stackTwo then save the value of stackTwo.pop() to a variable. Then we while loop them back to stack one. => return the saved pop value from stackTwo.

## Solution

Please refer to assets.