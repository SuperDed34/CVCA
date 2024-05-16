import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import './header/header'
import MainPage from './main/about/about'
import Work from './work/work';
import './header/header.css'
import logo from './assets/logo.png'
import BurgerMenu from './header/burger'
import text from './texts/eng.json'
import NativeProject from './nativeJSHandler/nativeJSHandler';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  let navItems = {
    'Home': '/',
    'About me': '#About',
    'My skills': '#Skills',
    'Employment histrory': '#Employment',
    'Education': '#Education',
    'Work examples': '/work'
  };

  const Nav = (
    <nav className="navigation">
      <ul className="nav-bar">
        {Object.entries(navItems).map(([label, link], index) => (
          <li className='nav-item' key={index}>
            {link.startsWith('#') ? (
              <a href={link} onClick={(e) => { e.preventDefault(); scrollToSection(link.slice(1)); }}>{label}</a>
            ) : (
              <Link to={link}>{label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <Router>
      <div className="bg">
        <div className='main'>
          <header className='header'>
            <div className="logo-wrapper">
              <img className='logo' src={logo} alt='logo'></img>
              <BurgerMenu content={Nav}></BurgerMenu>
              {Nav}
            </div>
          </header>
          <hr></hr>
          <Routes>
            <Route exact path='/CVAC/dist' element={<MainPage text={text} />} /> 
            <Route path='/' element={<MainPage text={text}/>} />
            <Route path='/work' element={<Work text={text} />} />
            <Route path='/work/doctors' element={<NativeProject path='../../src/work/doctors/index.html'/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
