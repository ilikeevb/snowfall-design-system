import { useState } from 'react';
import './App.css';
import { SnowfallIcon } from 'react-library';

function App() {
  const [iconName, setIconName] = useState('fish');

  return (
    <div className="App">
      <SnowfallIcon name={iconName} />
      <input
        value={iconName}
        onChange={e => setIconName(e.target.value)}
      />
    </div>
  );
}

export default App;