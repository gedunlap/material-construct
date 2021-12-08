import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="logo" src="https://i.imgur.com/EsCu0Sw.png" alt="Material Tampa" />
        <p className="text1">Our site is currently under construction</p>
        {/* <a href="" target="_blank" rel="noreferrer"> */}
          <button>Book An Appointment</button>
        {/* </a> */}
        <p className="text2">Check us out on Instagram</p>
        <a href="https://www.instagram.com/material.tpa/" target="_blank" rel="noreferrer"><img className="ig" src="https://i.imgur.com/w87mdKt.png" alt="instagram logo" /></a>
        <img className="m" src="https://i.imgur.com/w6tXxGd.jpg" alt="Scissors" />
      </div>
    </div>
  );
}

export default App;
