import { useState } from 'react';
import FormTest from './formtest'; // Chú ý việc import thành phần FormTest từ file formtest.jsx hoặc formtest.js
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FormTest /> {/* Sử dụng thành phần FormTest trong JSX */}
    </div>
  );
}

export default App;
