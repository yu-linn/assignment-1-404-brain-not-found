const request = require('request')



function getCollection(callback) {

	//NEWS API
	//Gets the JSON collection of top Canada headlines
	let  query = "https://newsapi.org/v2/everything?language=en&q=trump&apiKey=0c892f7ce2ee4fd09aef39ff92f65b77"

	request.get(query, function(error, response, body){
		if(error){
			return error
		}

		if(response.statusCode === 200){
			let fullData = JSON.parse(body);
			callback(fullData.articles)
		}

	});


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