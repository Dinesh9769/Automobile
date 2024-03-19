// src/App.js
import React from 'react';
import './App.css';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" data-testid="menu-content">
      <div className="container">
        <a className="navbar-brand" href="/">ABC Automobiles</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/" onClick={(e) => e.preventDefault()}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={(e) => e.preventDefault()}>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={(e) => e.preventDefault()}>Vehicles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={(e) => e.preventDefault()}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={(e) => e.preventDefault()}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function About() {
  return (
    <div className="container" data-testid="about-content">
      <div className="card">
        <img src="https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" width="400" height="400" alt="Banner" />
        <div className="card-body">
          <h5 className="card-title">About Us</h5>
          <p className="card-text">.</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light text-center" data-testid="footer-content">
      <div className="container">
        <span className="text-muted">© 2024 ABC Automobiles. All rights reserved.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Menu />
      <About />
      <Footer />
    </div>
  );
}

export default App;
