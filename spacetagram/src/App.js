import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Apod from './Apod.js';

function App() {
  return (
    <div className="App">
      <h1>Spacetagram</h1>
      <p>Brought to you by NASA's image API</p>
      <Apod/>
    </div>
  );
}

export default App;
