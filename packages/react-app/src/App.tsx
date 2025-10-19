import "./App.css";
import { SnowfallButton } from "react-library";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <SnowfallButton theme="primary" size="small" label="Click Me" />
        <SnowfallButton theme="primary" size="medium" label="Click Me" />
        <SnowfallButton theme="primary" size="large" label="Click Me" />
      </div>
      <div className="buttons">
        <SnowfallButton theme="secondary" size="small" label="Click Me" />
        <SnowfallButton theme="secondary" size="medium" label="Click Me" />
        <SnowfallButton theme="secondary" size="large" label="Click Me" />
      </div>
    </div>
  );
}

export default App;
