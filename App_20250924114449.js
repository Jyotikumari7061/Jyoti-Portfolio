@"
import React from 'react';
import './App.css';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
"@ | Out-File -FilePath "App.js" -Encoding UTF8