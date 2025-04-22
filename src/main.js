index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 2204;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Tulse API' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});