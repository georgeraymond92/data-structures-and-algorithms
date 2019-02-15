'use strict';
const util = require('util');
const List = require('../linkedList/linked-list').LinkedList;


class HashMap {
    constructor(size){
        this.size = size;
        this.map = new Array(size);
    }

    hash(key){
        let chars = key.split('');
        let accumlatedValue = chars.reduce( ( acc, value) => acc + value.charCodeAt(0), 0);
        return accumlatedValue % this.size;
    }

    add(key, value) {
        let hash = this.hash(key)
        if ( !this.map[hash] ) {
            this.map[hash] = new List();
        }
        this.map[hash].insert({[key]:value});
    }

    find(key) {
        let hash = this.hash(key);
        if(this.map[hash]) {
            return this.map[hash];
        } else {
            'does not exist.'
        }
    }

    contains(key) {
        // console.log('in contains', key)
        let hash = this.hash(key);
        if(this.map[hash]) {
            return true;
        } else {
            return false;
        }
    }

    GetHash(key) {
        let hash = this.hash(key);
        if(this.map[hash]) {
            // console.log(hash)
            return hash;
        } else {
            return 'This key does not exist in the HashMap.'
        }
    }
}

let myHash = new HashMap(50);

myHash.add('Pizza', 'food');
myHash.add('Apex', 'game');
myHash.add('Bose', 'headphones');
myHash.add('Javascript', 'object-oriented');

console.log(myHash.find('Heather'));
console.log(myHash.find('zebra'));

console.log(myHash.contains('Pizza'));
console.log(myHash.contains('Apex'));

console.log(myHash.GetHash('Cows'));
console.log(myHash.contains('Javascript'));

console.log( util.inspect(myHash, {showHidden: false, depth: null}));

module.exports = HashMap;