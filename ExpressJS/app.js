const express = require('express');
const session = require('express-session');
const flash = require("connect-flash");
const app = express();

// This middleware is used to perform actions before routing, like logging in.
app.use((req, res, next) => {
    console.log("Middleware executed");
    next();   
});

// Setup session middleware
app.use(session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: false // Corrected typo here
}));

// Setup flash middleware
app.use(flash());

// Define routes
app.get('/', (req, res) => {
    req.session.view = true;
    res.send(`The request session view: ${req.session.view}`);
    console.log(req.session.view);
    
});

app.get('/login', (req, res) => {
    req.flash('info', 'Flash message: Something went wrong');
    res.redirect('/error');
});

app.get('/error', (req, res) => {
    let msg = req.flash('info');
    res.send(msg);
});

app.get('/about', (req, res) => {
    res.send("It is the about route");
});

app.get('/blog', (req, res) => {
    res.send("It is the blog route");
});

// Error handling for unmatched routes
app.get('*', (req, res) => {
    res.send("Sorry, this page is not available");
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
