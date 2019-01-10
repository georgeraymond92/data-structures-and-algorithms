# Multi-bracket Validation.
#### Authors: George Raymond & Heather Cherewaty

## Challenge
Create a function that takes in at string and checks to see if it contains brackets that may be unbalanced

## Approach & Efficiency
* Instanciate 6 counters => One for each type of bracket
* Iterate throught the characters of the string => check to see if the close counter ever is greater than the open counters on each iteration => if true return false => increment the counters accordingly
* Check to see if the values of each pair of counters is equal => if true return true => else return false

## Solution
Refer to /assets