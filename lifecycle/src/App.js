import { useState, useEffect } from 'react';
import './App.css';

import Counter from './Counter';

const App = () => {

  console.log('App component started');

  const [running, setRunning] = useState(true)

  const stopCounter = () => {
    setRunning(false)
  }

  console.log('App component finished');


  console.log('App component render()');
  return running ? (
    <div className="App">
      <h2>Clicking this button will destroy the Counter component and clear the state.</h2>
      <button onClick={stopCounter}>Stop the counter</button>

      <Counter />
    </div>
  ) : <h2>Counter stopped</h2>
}

export default App;