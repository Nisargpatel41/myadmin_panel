import React from "react";
import ReactQuill from "react-quill";
// import parse from 'html-react-parser';
// import "../componentCss/QuillEditor.css";
import "react-quill/dist/quill.snow.css";
import "./QuillEditor.css";

const QuillEditor = ({ handleChange, value }) => {
  const modules = {
    toolbar: [
      // [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      // ["clean", "image"],
    ],
  };

  const formats = [
    // "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    // "image",
  ];

  return (
    // <CAccordion>
    <div className="textEditorContainer">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={handleChange}
      ></ReactQuill>
    </div>
    // </CAccordion>
  );
};

export default React.memo(QuillEditor);
