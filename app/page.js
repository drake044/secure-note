"use client"
// app/page.js
import { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import axios from 'axios';

export default function Home() {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const response = await axios.get('http://localhost:5002/api/notes');
        setNotes(response.data);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleNoteAdded = (newNote) => {
        setNotes((prevNotes) => [...prevNotes, newNote]);
    };

    return (
        <div>
            <h1>SecureNote</h1>
            <NoteForm onNoteAdded={handleNoteAdded} />
            <NoteList notes={notes} />
        </div>
    );
}
