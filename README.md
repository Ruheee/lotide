# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Ruheee/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: a function that takes in two arrays and returns a response whether arrays are equal or not
* `assertEqual`: a funciton that asserts if two values are equal or not
* `assertObjectsEqual`: a function that asserts if two objects are equals or not
* `countLetters`: a function that returns how many times each letter appears in a string 
* `countOnly`: a function that takes items and returns counts for a specific subset of those items
* `eqArrays`: a function that compares two arays
* `eqObjects`: function that compares two objects.
* `findKey`: a function that goes through the the object and returns the first key for which the callback returns a truthy value
* `findKeyByValue`: a function that scans for a key on an object where its value matches the given value
* `flatten`: a function that flattens an nested arrays into a single-level array
* `head`:  a function that retrieves the first element from the array
* `index`: a list of all the functions in an object
* `letterPositions`: a function that returns all the indices in the string where each character is found
* `map`: a function that creates a new array with the results of calling a provided function on every element in the calling array
* `middle`: a function that returns the middle element(s) of an array
* `tail`: a function that retrieves every element except for the first element of the array
* `takeUntil`: a function that returns a slice of the array with elements taken from the beginning
* `without`: a function that removes elements from an array