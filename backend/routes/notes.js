// backend/routes/notes.js
const express = require('express');
const router = express.Router();

let notes = []; // This will temporarily store notes in memory

// Get all notes
router.get('/', (req, res) => {
    res.json(notes);
});

// Add a new note
router.post('/', (req, res) => {
    const note = req.body;
    notes.push(note);
    res.status(201).json(note);
});

module.exports = router;
