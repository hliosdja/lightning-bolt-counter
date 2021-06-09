import {useState} from 'react';

function App() {
  let [lightningCount, setLightningCount] = useState(0);
  const lightningIncrement = () => {
      setLightningCount(lightningCount + 100)
  }
  setTimeout(()=> {
    lightningIncrement()
  }, 1000);

  console.log(lightningCount)
  return (
    <div>
      <h2>Lightning Facts!</h2>
      <p>About 100 lightning bolts strike the Earth's surface every second.</p>
      <p>As of this counter started, there are {lightningCount} lightning bolts that striked the Earth.</p>
      <button onClick={lightningIncrement}>Count</button>
    </div>
  );
}

export default App;
