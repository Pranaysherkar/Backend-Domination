# Backend Domination

# Understanding the `this` Keyword in JavaScript

The `this` keyword in JavaScript can have different values depending on the context in which it's used. Here's a summary of how `this` behaves in various scenarios:

## Summary Table

| Context                       | `this` Value                         |
|-------------------------------|--------------------------------------|
| Regular function              | Global object (`window` in browser, `global` in Node.js) |
| Object method                 | The object that owns the method      |
| Constructor function          | The new instance being created       |
| Arrow function                | Inherited from the enclosing context |
| Browser console               | `window`                             |
| Node.js console (REPL)        | `global`                             |

## Examples

### In a Regular Function
When `this` is used in a regular function, its value is determined by how the function is called.

```javascript
function regularFunction() {
  console.log(this);
}

regularFunction(); // In the browser, this is the global object (window). In Node.js, it's the global object.
```


## IP Address (Internet Protocol)
A unique string of characters that identifies each computer using the Internet Protocol to communicate over a network. (IP address is used while the computer is on the internet.)

> IP address is provided by the Internet Service Provider (ISP) using the Dynamic Host Configuration Protocol (DHCP).

> Two variants of IP address: IPv4 and IPv6.

* Use this command to access the IP address:
    ```sh
    ipconfig
    ```

## MAC Address (Media Access Control)
A physical, unique identity of your device, provided by the device manufacturer.

> Every network interface(port, dongle) has a different MAC address.

* Use this command to access the MAC address:
    ```sh
    ipconfig /all
    ```

## Proxy
A proxy is a server that acts as an intermediary between a user and the internet, providing benefits like anonymity, security, and performance enhancement. (e.g., accessing blocked websites through another website.)

## Reverse Proxy
A reverse proxy is a server that sits between client devices and a web server, forwarding client requests to the web server and returning the server's responses to the clients. It is often used for load balancing, security, and caching.

## VPN (Virtual Private Network)
A service that encrypts your internet connection and routes it through a server, providing privacy and security by hiding your IP address and data from external observers.

## Server
A powerful computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network.

## Protocol Types
Two types of protocols: TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).

### TCP:
* **Reliable**: Ensures all data packets are delivered in the correct order.
* **Connection-oriented**: Establishes a connection before data transfer.
* **Error-checking**: Performs error detection and correction.
* **Use Cases**: Web browsing (HTTP/HTTPS), email (SMTP), file transfers (FTP).

### UDP:
* **Unreliable**: Does not guarantee delivery or order of data packets.
* **Connectionless**: Sends data without establishing a connection.
* **Low Overhead**: Faster but with minimal error-checking.
* **Use Cases**: Online gaming, live video/audio streaming, DNS queries.

## Node.js
Node.js is a JavaScript runtime environment created by Ryan Dahl. It uses Google's V8 engine, which is written in C++.

## Libuv
Libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops.

## Module
In Node.js, a module is a reusable piece of code, like `fs` or `http`.

## Package
In npm, a package is a collection of modules or libraries that can be used in a Node.js application.

# HTTP Methods

- **GET** :
Retrieve data from the server.

- **POST** :
Create new data on the server.

- **PATCH** :
Update a specific piece of information on the server.

- **PUT** :
Update all information on the server.

- **DELETE** :
Delete information from the server.


# HTTP Status Codes

## 1xx Informational

- **100 Continue**: Initial request part received; client should continue.
- **101 Switching Protocols**: Server is switching protocols as requested by the client.

## 2xx Success

- **200 OK**: Request succeeded.
- **201 Created**: Request succeeded; new resource created.
- **202 Accepted**: Request accepted for processing, but not completed.
- **203 Non-Authoritative Information**: Request succeeded; information from a third-party source.

## 3xx Redirection

- **301 Moved Permanently**: Resource permanently moved to a new URL.
- **307 Temporary Redirect**: Resource temporarily moved; use the same method for requests.
- **308 Permanent Redirect**: Resource permanently moved; use new URL for future requests.

## 4xx (Client Errors)

- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: The client must authenticate itself to get the requested response.
- **402 Payment Required**: Reserved for future use.
- **403 Forbidden**: The client does not have access rights to the content; the server is refusing to give the requested resource.
- **404 Not Found**: The server can not find the requested resource.



## 5xx Server Errors

- **500 Internal Server Error**: General server error; request couldn't be completed.
- **501 Not Implemented**: Server does not recognize the request method.
- **502 Bad Gateway**: Received an invalid response from the upstream server.
- **503 Service Unavailable**: Server is currently unavailable (overloaded or down).
- **504 Gateway Timeout**: Upstream server failed to send a request in time.

## Express.JS :
Express.js is a **web application framework for Node.js**, which provides tools and features for building web applications and APIs, such as routing, middleware, and handling HTTP requests.

## Session 
A session is a way to keep track of a user's activity on a website or application over time. It allows the server to remember who the user is and their actions, even as they navigate through different pages.

## Installation

```bash
npm install express-session
```


# Understanding Sessions in Web Development

A **session** is a way to store and manage user data across multiple pages of a website or application. `It allows the server to remember a user's actions, preferences, and information as they navigate between different pages during their visit.`

## How Sessions Work

1. **Session Creation**: When a user visits a website, the server creates a unique session for that user.
2. **Session Storage**: The server stores data related to the session (like login status, shopping cart items, etc.).
3. **Session ID**: The server assigns a unique identifier called a **session ID** to the session, which is sent to the user's browser in a cookie.
4. **Session Tracking**: Every time the user makes a request to the server, the session ID is sent along with it, allowing the server to retrieve the session data and maintain continuity.

## Example: Shopping Cart

Imagine you're shopping online:
- When you add an item to your cart, the website stores this information in a session.
- As you navigate to different pages, the website "remembers" your cart items through the session.

## Session in Node.js with Express

Here’s a basic example of how to use sessions in a Node.js application using the Express framework:

```javascript
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'your_secret_key', // Used to sign the session ID cookie
  resave: false,             // Do not save the session if it was not modified
  saveUninitialized: true    // Save a session that is new but not modified
}));

app.get('/', (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  res.send(`Number of views: ${req.session.views}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

# Connect-Flash in Express

`connect-flash` is a middleware for Express that allows you to store and display temporary messages (known as flash messages) in a user's session. These messages are typically used for alerts like "Login successful" or "Error processing your request." Flash messages are displayed only once, and then they are removed.

## Installation

> **Note:** We need to set up **Express session** when using `connect-flash` because it relies on Express sessions behind the scenes.

To install `connect-flash`, use the following command:

```bash
npm install connect-flash 
```

```javascript
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// Set up session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

// Set up connect-flash middleware
app.use(flash());

// Route that sets a flash message
app.get('/login', (req, res) => {
    req.flash('success', 'Login successful');
    res.redirect('/dashboard');
});

// Route that retrieves and displays the flash message
app.get('/dashboard', (req, res) => {
    const message = req.flash('success');
    res.send(message.length ? message[0] : 'Welcome to your dashboard');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

```
