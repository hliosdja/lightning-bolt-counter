import {useState} from 'react';
import './styles/main.css';

function App() {
  let [lightningCount, setLightningCount] = useState(0);
  const lightningIncrement = () => {
      setLightningCount(lightningCount + 100)
  }
  setTimeout(()=> {
    lightningIncrement()
  }, 1000);
  return (
    <div className="container">
      <div className="wrapper">
        <h2>Lightning Facts!</h2>
        <p>About 100 lightning bolts strike the Earth's surface every second.</p>
        <p>Number of lightning strikes on Earth as of this counter started:</p>
        <h1>{lightningCount}</h1>
      </div>
    </div>
  );
}

export default App;
