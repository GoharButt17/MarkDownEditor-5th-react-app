import React from "react";
import {marked} from "marked";
import "./Preview.css";

const Preview = ({ markDownText }) => {
    const htmlContent = marked(markDownText);
  
    return (
      <div className="preview-container">
        <h2 className="preview-title">Preview</h2>
        <div
          className="markdown-output"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    );
  };
  
  export default Preview;
