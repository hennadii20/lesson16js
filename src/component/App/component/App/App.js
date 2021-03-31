import {useState} from 'react';
import  Paragraph from '../paragraph/paragraph';
import './App.css';


function App() {

  const [number, plusNumber] = useState(0);

  return (
      <div className="App">
          <button onClick={() =>  plusNumber(number + 1)}>Plus</button>
          <Paragraph i={number} />
          <button onClick= {() => Math.max(plusNumber(number - 1), 0)}>Minus</button>
      </div>
  );
}

export default App;