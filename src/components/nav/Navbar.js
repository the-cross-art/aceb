import React, { useState } from "react";
import "./navbar.css";
import menu from "../../assets/images/menu.svg";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [activeIndex, setActiveIndex] = useState(0); // State to track the active navigation item

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="sc-578c4a0d-0 kaSJGa"></div>
      <nav
        className={`sc-578c4a0d-3 kcNKYk sc-914a58d4-2 cpjwvR ${
          isOpen ? "open" : ""
        }`}
      >
        <span className="sc-578c4a0d-4 bJPYSW" onClick={toggleNavbar}>
          <div className="logo">
            <img
              src={logo}
              style={{
                
                marginLeft: "5px",
              }}
              className="img_fluid"
              alt="Logo"
            />
            <div className="nav-tittle-text fs-3">ACEBITS</div>
          </div>
          {isOpen ? (
            <div className="cross-icon">
              <div className="line line1"></div>
              <div className="line line2"></div>
            </div>
          ) : (
            <img
              src={menu}
              style={{ marginRight: "5px" }}
              alt="Menu"
              className="menu-icon"
            />
          )}
        </span>
        <div className="desktop-nav-wrap">
          <ul>
            <li>
              <a href="/" className="flex">
                <img
                  src={logo}
                  style={{ width: "50px" }}
                  className="img_fluid h-14"
                  alt="Logo"
                />
                <div className="nav-tittle-text fs-3">ACE BITS</div>
              </a>
            </li>
          </ul>

          {/* <ul>
            <li>
              <a data-label="Get started" variant="secondary-nav" className="sc-de23db1c-0 isMwKp" href="/">
              Home
              </a>
            </li>
          </ul> */}
          <ul className="nav-items">
            <li>
              <a
                data-label="Docs"
                variant="main-nav"
                className="sc-de23db1c-0 isMwKp"
                href="/"
              >
                <span>Home</span>
              </a>
            </li>
       
            <li>
              <a
                data-label="Pricing"
                variant="main-nav"
                className="sc-de23db1c-0 isMwKp"
                href="/about"
              >
                <span>About</span>
              </a>
            </li>
            <li>
            <a href="/faculty">Faculty</a>

          
            </li>

            <li>
              <a
                data-label="Docs"
                variant="main-nav"
                className="sc-de23db1c-0 isMwKp"
                href="/events"
              >
                <span>Events</span>
              </a>
            </li>
            <li>
              <a
                data-label="Docs"
                variant="main-nav"
                className="sc-de23db1c-0 isMwKp"
                href="/gallery"
              >
                <span>Gallery</span>
              </a>
            </li>
       
            <li style={{marginTop:"1px"}}>
              <div className="dropdown">
                <button className="dropbtn">Team</button>
                <div className="dropdown-content">
                <a href="/core">2K22</a>

                  
                  <a href="/team2k21">2K21</a>
                  <a href="/team2k20">2K20</a>

                </div>
              </div>
            </li>
            <li style={{marginTop:"1px"}}>
              <div className="dropdown">
                <button className="dropbtn">Others</button>
                <div className="dropdown-content">
                  <a href="/constitution">Constitution</a>
                  <a href="/magazine">Magazine</a>
               
                  <a
                data-label="Docs"
                variant="main-nav"
                className="sc-de23db1c-0 isMwKp"
                href="/contactus"
              >
                <span>Contact Us</span>
              </a>

                  <a href="/lab">Laboratory</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
