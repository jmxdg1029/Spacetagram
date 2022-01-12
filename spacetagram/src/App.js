import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Apod from './Apod.js';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>SPACETAGRAM</h1>
        <p>Brought to you by NASA's image API</p>
        </div>
      <Apod/>
    </div>
  );
}

export default App;
