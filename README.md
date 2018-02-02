# Assignment #1

Implement the following two functions:

- getCollection: it should accept a callback, send a request to retrieve the full collection from your chosen API, wait until a response is received and callback with an array of objects, where each object is an item from the collection.  You are free to decide how many items are returned.

- getSortedCollection: it should accept a callback, retrieve the full collection, sort the collection using the criteria you think makes the most sense for its items and callback with a sorted array of objects.

Run using `node main.js`

**Project Proposal:**

Our website will allow the user to efficiently analyze news headlines of their desired topics and view sentiment information about whether the news is overall positive or negative. The user will be able to search and subscribe to multiple topics to track their sentiment and reputation from different news sources. The website will also provide links leading to the full article if the user wishes to read it. We accomplish this using two APIs: News API and IBM Watson API. Using the News API, we will collect headlines and brief information about the specific topic from various news sources. Using IBM Watson API for natural language understanding, we plan on using the sentiment analysis feature to analyze the news headlines and descriptions about the topics. 


**APIs to use**
- https://newsapi.org/
- https://www.ibm.com/watson/developercloud/natural-language-understanding/api/v1/#versioning


1. Is the API well documented?
Is there enough information to understand the collections and resources it manages? (You should experiment with the API to see whether the data returned is what you expect, and that you can begin to interpret it.). Does the documentation offer explanations and examples on how to use it and various options available across each method/URL.

The News API provides sufficient documentation about collecting headline information from thousands of websites. It provides examples of searching for articles, top headlines, and their sources. It also provides examples of how to use the API in different languages, including node.js. The Watson API provides documentation about how to analyze the text for sentiment analysis. The API allows the user to input text and analyze it with targets to determine the different emotions that relate to the specified targets. The documentation provides examples in node.js to analyze the emotions associated with the given text. Furthermore, there's documentation of how to analyze the general sentiment and emotion of the given content (positive, negative, joy, anger, etc).

2. Does this API uses a RESTful notation to access such collections / resources? (Give examples.)

The News API uses RESTful notation and offers two main endpoints to access collections: /v2/top-headlines and /v2/everything.  
For example, if we want headlines from BBC news, we can GET request this URL: /v2/top-headlines?sources=bbc-news. 
If we want headlines from a specific topic like Apple, we can GET request this URL: /v2/everything?q=Apple

IBM Watson API also uses RESTful notation. To view sentiment information about a string of words, we use POST request to pass the string as parameters to this endpoint: /natural-language-understanding/api/v1/analyze


3. Which HTTP methods are supported by the API? Note that most public APIs will restrict users from jeopardizing the data (perhaps no DELETE).

News API: Supports GET

IBM Watson API: Supports GET and POST


4. Explain how the information about these resources/collections will be integrated into your application.

When the user searches for a topic or keyword, a request will be made to the News API to get a collection of news headlines over a period of time as specified by the user. We will parse the JSON response to retrieve the headline, description, image, and other information. The headline and description will be sent to the IBM Watson API to get a sentiment score in the range [-1, +1], which indicates negative, neutral, or positive sentiment. In addition, we will use Watson API to get emotion information for each headline (joy, sadness, anger, etc). The sentiment score over time will be displayed on a line chart, along with links to some of the more relevant headlines. 