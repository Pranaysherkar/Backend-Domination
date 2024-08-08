# Backend Domination

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

## VPN (Virtual Private Network)
A service that encrypts your internet connection and routes it through a server, providing privacy and security by hiding your IP address and data from external observers.

## Server
A powerful computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network.

## Reverse Proxy
A reverse proxy is a server that sits between client devices and a web server, forwarding client requests to the web server and returning the server's responses to the clients. It is often used for load balancing, security, and caching.

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

