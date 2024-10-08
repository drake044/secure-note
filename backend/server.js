// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const notesRoute = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/notes', notesRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
