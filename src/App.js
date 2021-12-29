import { useState } from 'react'
import './App.css';
import Modal from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <div className="container">
        <img className="logo" src="https://i.imgur.com/EsCu0Sw.png" alt="Material Tampa" />
        <p className="text1">Our site is currently under construction</p>
        <div className='btn'>
          <button onClick={() => setIsOpen(true)}>Book An Appointment</button>
          <Modal className="modal" open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
        <p className="text2">Check us out on Instagram</p>
        <a href="https://www.instagram.com/materialtampa/" target="_blank" rel="noreferrer"><img className="ig" src="https://i.imgur.com/w87mdKt.png" alt="instagram logo" /></a>
        <img className="m" src="https://i.imgur.com/w6tXxGd.jpg" alt="Scissors" />
      </div>
    </div>
  );
}

export default App;
