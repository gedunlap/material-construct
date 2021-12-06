import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="logo" src="https://i.imgur.com/t3cbqzd.png" alt="Material Tampa" />
        <p className="text1">Our site is currently under construction</p>
        <Link to=""><button>Book An Appointment</button></Link>
        <p className="text2">And check us out here later</p>
        <img className="x" src="https://i.imgur.com/o2Q2xAa.png" alt="Scissors" />
      </div>
    </div>
  );
}

export default App;
