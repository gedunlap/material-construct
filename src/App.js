import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="logo" src="https://i.imgur.com/EsCu0Sw.png" alt="Material Tampa" />
        <p className="text1">Our site is currently under construction</p>
        <a href="https://www.fresha.com/a/material-tampa-2502-north-howard-avenue-tjr5uxjo/booking?menu=true&dppub=true" target="_blank" rel="noreferrer">
          <button>Book An Appointment</button>
        </a>
        <p className="text2">Check us out on Instagram</p>
        <a href="https://www.instagram.com/materialtampa/" target="_blank" rel="noreferrer"><img className="ig" src="https://i.imgur.com/w87mdKt.png" alt="instagram logo" /></a>
        <p>Contact us by email</p>
        <a href="mailto: contact@materialtampa.com" target="_blank" rel="noreferrer"><img className='email' src="https://i.imgur.com/CtrafJJ.png" alt="email-icon" /></a>
        <img className="m" src="https://i.imgur.com/w6tXxGd.jpg" alt="logo" />
        <p className='address'>
          2502 N. Howard Ave Suite B 
          <br />
          Tampa, FL 33607
        </p>
      </div>
    </div>
  );
}

export default App;
