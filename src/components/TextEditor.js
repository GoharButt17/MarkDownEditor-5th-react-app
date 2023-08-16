import React, { useState } from 'react';
import './TextEditor.css'; // Import your custom CSS file

const TextEditor = ({ handleMarkDownContent }) => {
    const [markdownText, setMarkdownText] = useState('');

    const handleInputChange = (event) => {
        const newMarkdownText = event.target.value;
        setMarkdownText(newMarkdownText);

        handleMarkDownContent(newMarkdownText);
    }

    return (
        <div className="text-editor-container">
            <textarea
                className="markdown-input"
                rows="10"
                value={markdownText}
                onChange={handleInputChange}
                placeholder='Start writing your markdown here...'
            />
            <p className="hint-text">Tip: You can use markdown syntax to format your text.</p>
        </div>
    );
};

export default TextEditor;
