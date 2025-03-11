// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// In-memory database for demonstration
let comments = [];

// Endpoint to add a new comment
app.post('/comments', (req, res) => {
    const { text, author } = req.body;
    const newComment = { id: comments.length + 1, text, author };
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});