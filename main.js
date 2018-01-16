const request = require('request')



function getCollection(callback) {
  // implement
}

function getSortedCollection(callback) {
  // implement
}

// use the following to test your functions
getCollection(function(array){
  console.log("Total items in collection ",array.length)
  console.log("First item in collection ",array[0])
})

getSortedCollection(function(array) {
  console.log("Collection sorted ",array)
})