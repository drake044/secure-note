// app/components/NoteForm.js
import { useState } from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';

const NoteForm = ({ onNoteAdded }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const encryptedNote = CryptoJS.AES.encrypt(content, 'secret key').toString();
        const note = { content: encryptedNote };

        const response = await axios.post('http://localhost:5002/api/notes', note);
        onNoteAdded(response.data);
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your note here..."
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NoteForm;
