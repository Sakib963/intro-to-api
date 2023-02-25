## What is Internet?
The internet, sometimes called simple "the net", is a worldwide system of computer networks. A network of networks in which at any one computer can, if they have permission, get information from any other computer.

## What is IP Address?
An IP Address is a unique address that identifies on the internet or a local network.
*   208.65.153.238 ---> YouTube
*   66.220.149.25 ---> Facebook
*   72.21.211.176 ---> Amazon
*   173.0.84.3 ---> PayPal

## Difference between IPV4 vs IPV6?
![ipv4](https://user-images.githubusercontent.com/66853064/221355174-839834e9-1c9e-4927-9650-7c30332768b3.PNG)

## What is DNS?
* The Domain Name Service (DNS) is the phonebook of the internet.
* Human access information online through domain names, like nytimes.com or espn.com.
* Web, browsers interact through Internet Protocol(IP) Address.
* DNS translates domain names to IP addresses, so browsers can load internet resources.

## Steps of DNS
![dns](https://user-images.githubusercontent.com/66853064/221355526-950d3019-8d17-4963-99a3-896ff1982a4b.PNG)
1. When a user enters a domain name in a browser, the server will search through a global server network that makes up the Domain Name System(DNS).
2. The request is made for one DNS server and if the address is not found there, it moves to other.
3. The DNS Server that has information about the IP address will return it to the browser.
4. The browser will request data about the site from the domain's hosting server. Once the hosting server sends the data back, the web browser will convert it into a web page.

## How to the Internet works?
![internet](https://user-images.githubusercontent.com/66853064/221356097-a9989d03-297f-4cf7-8230-42e8cd8e7427.PNG)

## What is HTTP?
* HTTP stands for Hyper Text Transfer Protocol.
* It is a protocol for fetching resources such as HTML Documents.
* It is the foundation of any data exchange on the web and it is a client-server protocol which means requests are initiated by the recipient, usually the web browsers.

## 7 Layers of OSI Model
![osi](https://user-images.githubusercontent.com/66853064/221356550-0be44b6b-973d-4e80-80f2-30de95801f00.PNG)

## HTTP Layer:
HTTP is in the application layer of the internet protocol suite model and in the session layer of the OSI model.

## HTTP vs HTTPS
![https](https://user-images.githubusercontent.com/66853064/221356719-e52cac95-eff3-4520-ae10-daf43d4b93c9.PNG)

## Notation
A series or system of written symbols used to represent numbers, amounts or elements in something. 

## JSON => JavaScript Object Notation

## stringify()
Converts a JavaScript value to a JSON String.
```
const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukhet',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

const shopJSON = JSON.stringify(shop);
```

## parse()
converts a JSON String into an object.

```
const returnJSON = JSON.parse(shopJSON);
```

# API => Application Programming Interface
## What is an API?
* API stands for Application Programming Interface.
* An API acts like a link that allows two application to talk to each other.
* API is the part of the server that receives requests and sends responses.

## URL => Uniform Resource Locator

## JSON
JavaScript Object Notation is an open data interchange that is both human and machine readable.

## Fetch API
The fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.
```
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayData(data));
```

## json()
This method of response interface takes a response stream and reads it to completion. It return a promise which resolves with the result of parsing the body text as JSON.

## REST API Methods
* GET
* POST
* PATCH/PUT
* DELETE

## CRUD => CREATE, READ, UPDATE, DELETE

## HTTP Status Code
* 200 => Ok
* 301 => Moved Permanently
* 302 => Moved Temporarily
* 404 => Not Found
* 500 => Internal Server Error
* 503 => Service Unavailable

## What is an API?
Application Programming Interface (API) is a software interface that allows two applications to interact with each other without any user intervention. API is a collection of software functions and procedures. In simple terms, API means a software code that can be accessed or executed.

## What are the HTTP methods supported by REST?
HTTP methods supported by REST are:

* GET: It requests a resource at the request URL. It should not contain a request body as it will be discarded. Maybe it can be cached locally or on the server.

* POST: It submits information to the service for processing; it should typically return the modified or new resource

* PUT: At the request URL it update the resource

* DELETE: At the request URL it removes the resource

* OPTIONS: It indicates which techniques are supported

* HEAD: About the request URL it returns meta information


## Can you use GET request instead of PUT to create a resource?
No, you are not supposed to use PUT for GET. GET operations should only have view rights, while PUT resource is used for updating a data.
## What is the difference between PUT and POST?
“PUT” puts a file or resource at a particular URI and exactly at that URI. If there is already a file or resource at that URI, PUT changes that file or resource. If there is no resource or file there, PUT makes one

POST sends data to a particular URI and expects the resource at that URI to deal with the request. The web server at this point can decide what to do with the data in the context of specified resource

PUT is idempotent meaning, invoking it any number of times will not have an impact on resources.

However, POST is not idempotent, meaning if you invoke POST multiple times it keeps creating more resources.

## What is JSON?
JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page

JSON is "self-describing" and easy to understand

## What is the file extension for JSON? => .json 

## What are the data types supported by JSON?
In JSON, values must be one of the following data types:

* a string
* a number
* an object (JSON object)
* an array
* a boolean
* null

JSON values cannot be one of the following data types:

* a function
* a date
* undefined

## What is the role os JSON.stringify()
The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

## Show to parse a JSON?
```
const returnJSON = JSON.parse(shopJSON);
console.log(returnJSON)
```

## GET vs POST
Two common methods for the request-response between a server and client are:

* GET- It requests the data from a specified resource
* POST- It submits the processed data to a specified resource

![get vs post](https://user-images.githubusercontent.com/66853064/221357906-0dcd3d02-a2f8-4a74-a378-2dea78141bb3.PNG)