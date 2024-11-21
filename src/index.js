import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import './menu.css';
import './select.css';
import { Welcome } from "./welcome.js";
import { BasicReact } from "./basicReact";
import { FormWithInput } from "./formWithInput";
import { FormWithSelect } from "./formWithSelect";
import { FormManyInputs } from "./formWithManyInput";
import {CarFunction} from './carFunction';
import {UsingUseEffect} from './usingUseEffect.js';
import {UseRef} from './useRef.js';
import NoPage from "./noPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);


	const closeMenu = () => {
		setIsMenuOpen(false);
	};
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

return (
  <BrowserRouter>
    <div>
      <header className="header">
        <div className="menu-toggle navbar">
          <div onClick={toggleMenu} className="container nav-container">
            <div className={isMenuOpen ? "checkedMenu" : "uncheckedMenu"}>
              <div id="menu-checkbox" className="hamburger-lines menu-checkbox">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="logo">
          <h1>My React App</h1>
        </div>
		
        <ul
          className={`menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <li onClick={closeMenu} className="menu-item">
            <Link  to="/">Welcome</Link>
          </li>
          <li onClick={closeMenu} className="menu-item">
            <Link  to="/basic_react">Basic React</Link>
          </li>
          <li onClick={closeMenu} className="menu-item">
            <Link  to="/form_with_select">Form With Select</Link>
          </li>
          <li onClick={closeMenu} className="menu-item">
            <Link  to="/form_with_many_inputs">Form With Many Inputs</Link>
          </li>
          <li onClick={closeMenu} className="menu-item">
            <Link  to="/form_with_input">Form With Input</Link>
          </li>
		  <li onClick={closeMenu} className="menu-item">
            <Link  to="/use_model_state">Using model to update state</Link>
          </li>
		   <li onClick={closeMenu} className="menu-item">
            <Link  to="/using_use_effect">Using useEffect</Link>
          </li>
		    <li onClick={closeMenu} className="menu-item">
            <Link  to="/using_use_ref">Using useRef</Link>
          </li>
        </ul>
		</header>
		<main className="page-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/basic_react" element={<BasicReact noDivs="10" x="10" />} />
          <Route path="/form_with_select" element={<FormWithSelect />} />
          <Route path="/form_with_many_inputs" element={<FormManyInputs />} />
          <Route path="/form_with_input" element={<FormWithInput />} />
		  <Route path="/use_model_state" element={<CarFunction />} />
		  <Route path="/using_use_effect" element={<UsingUseEffect />} />
		  <Route path="/using_use_ref" element={<UseRef />} />
		  
		  
          <Route path="*" element={<NoPage />} />
        </Routes>
		</main>
    </div>
  </BrowserRouter>
);
}
root.render(<App />);
