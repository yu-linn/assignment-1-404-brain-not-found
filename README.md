# Assignment #1

Implement the following two functions:

- getCollection: it should accept a callback, send a request to retrieve the full collection from your chosen API, wait until a response is received and callback with an array of objects, where each object is an item from the collection.  You are free to decide how many items are returned.

- getSortedCollection: it should accept a callback, retrieve the full collection, sort the collection using the criteria you think makes the most sense for its items and callback with a sorted array of objects.

Run using `node main.js`

Project Proposal
Our team would like to propose a website that would allow the user to search through news articles of their desired topic and give information about the reactions in the news about their desired topic (positive or negative). The user can subscribe to the topics to keep track of the public and news feedback about the topic. Using the News API, we can collect information about the specific topic from news websites. Using IBM Watson API for natural language understanding, we plan on utilizing sentiment analysis to determine the public feedback about the topic.

API
- https://newsapi.org/
- https://www.ibm.com/watson/developercloud/natural-language-understanding/api/v1/#versioning


1. Is the API well documented?
	a) Is there enough information to understand the collections and resources it manages? (You should experiment with the API to see whether the data returned is what you expect, and that you can begin to interpret it.)
    b) Does the documentation offer explanations and examples on how to use it and various options available across each method/URL.
2. Does this API uses a RESTful notation to access such collections / resources? (Give examples.)
3. Which HTTP methods are supported by the API? Note that most public APIs will restrict users from jeopardizing the data (perhaps no DELETE).
4. Explain how the information about these resources/collections will be integrated into your application.
