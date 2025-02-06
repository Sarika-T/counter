import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, Box } from '@mui/material';


export default function CommentBox(props) {
    const {modules, placeholder} = props;
  const [comment, setComment] = useState('');

  const handleChange = (value) => {
    setComment(value);
  };

  const handleSubmit = () => {
    console.log("Comment submitted:", comment);
  };


  return (
    <Box sx={{ width: '100%', border: 0}}>
      <ReactQuill
        value={comment}
        onChange={handleChange}
        theme="snow"
        placeholder={placeholder}
        style={{ height: 235 }}
        modules={modules}
      />
      {/* <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ marginTop: 2 }}
      >
        Submit
      </Button> */}
    </Box>
  );
}