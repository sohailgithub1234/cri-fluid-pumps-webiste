import React from "react";
import "./App.css";
import logo from "./images/logo.png";
import first from "./images/1.png";
import second from "./images/2.png";
import third from "./images/3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="CRI Logo" />
          </div>
        </div>
      </header>

      <main className="main">
        <br />
        <br />
        <div className="title">
          <b>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </b>

          <ul>
            <li>
              {" "}
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <br />
          <br />
          <div className="container">
          <div className="images">
            <img className="second-image" src={second} alt="madam" />   
            <img className="first-image" src={first} alt="trophy" />
          </div>
            <p className="paragraph">Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <section className="awards">
          <div className="award-item">
            <h2>APPLIANCE OF THE YEAR 2018</h2>
            <p>GOVERNMENT OF INDIA</p>
            <p>MINISTRY OF POWER</p>
          </div>
          <div className="award-item">
            <h2>NATIONAL ENERGY CONSERVATION AWARD</h2>
            <p>RASHTRIYA URJA SAMRAKSHAN PURASKAR</p>
          </div>
        </section>
        <section className="stats">
          <div className="stat-item">
            <h2>INSTALLED OVER</h2>
            <h3>10 LAKHS</h3>
            <p>STAR RATED PUMPSETS ACROSS THE COUNTRY</p>
          </div>
          <div className="stat-item">
            <h2>CUMULATIVE SAVING OF</h2>
            <h3>MORE THAN</h3>
            <h3>9,000 MILLION UNITS</h3>
            <p>OF POWER FOR THE NATION</p>
          </div>
        </section>
        <br/><br/>
        <b>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</b>
        <br />
        <img className="third-img" src={third} alt="CRI Logo" />
        <br/>
        <h6>
          Valves - Pumps - Pipes - IOT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </h6>
        <br/>
        <div className="red-line"></div>
        <br/>
          <h6>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
          <br/>
          <div className="product-list">
          <p>CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
          </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} /> Toll Free <b>1800100564</b>
          </div>
          <div className="url">
            <FontAwesomeIcon icon={faGlobe} /> www.crigroups.com
          </div>
          <p>&copy; 2023 C.R.I. FLUID SYSTEMS LIMITED. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
