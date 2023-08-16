import React,{useState} from 'react';
import TextEditor from '../components/TextEditor';
import Preview from '../components/Preview';
import './MarkDownEditor.css';

const MarkdownEditor = () =>{
    const [markdownText, setmarkdownText] = useState('');

    const handleMarkDownText = (text) =>{
        setmarkdownText(text);
    }
    return (
        <div>
            <h1 className='Mainh1'> Mark Down Editor</h1>
            <div>
                <TextEditor handleMarkDownContent={handleMarkDownText}/>
            </div>
            <div>
                <Preview markDownText={markdownText} />
            </div>
        </div>
    );
};

export default MarkdownEditor;