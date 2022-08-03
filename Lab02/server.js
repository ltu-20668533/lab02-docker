// Require the Express module
const express = require('express');

// Create an Express web application
const app = express();

// Specify how to respond to GET /
app.get('/', (req, res) => {
    const today = new Date();
    res.send('Your fortune is: ' + today);
});

// Start listening for HTTP requests on port 3000
app.listen(3000, () => {
  console.log('Server started');
});