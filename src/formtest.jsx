import React, { useState } from 'react';
import axios from 'axios';

function FormTest() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3001/orc/getFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Hiển thị văn bản đã nhận dạng
      setText(response.data.recognizedText);
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {/* Hiển thị văn bản đã nhận dạng */}
      <p>{text}</p>
    </div>
  );
}

export default FormTest;
