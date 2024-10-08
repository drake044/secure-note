// app/components/NoteList.js
import CryptoJS from 'crypto-js';

const NoteList = ({ notes }) => {
    return (
        <ul>
            {notes.map((note, index) => {
                const decryptedNote = CryptoJS.AES.decrypt(note.content, 'secret key').toString(CryptoJS.enc.Utf8);
                return <li key={index}>{decryptedNote}</li>;
            })}
        </ul>
    );
};

export default NoteList;
