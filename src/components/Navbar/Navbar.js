import React from 'react';
import "./Navbar.css";

function NavBar(props) {
    let navBarItems = [
       <li  key={1}>
        <a className="navbar-item nav-font" href="/">wePlay</a>
      </li>,
    ];
    if (props.isLoggedIn) {

      navBarItems.push(
           <li  key={2}>
            <a className="navbar-item nav-font" href="/parks">Parks</a>
          </li>
        );
        navBarItems.push(
           <li  key={4}>
            <a className="navbar-item nav-font" href="/locations">Locations</a>
          </li>
        );
        navBarItems.push(
           <li  key={3}>
            <a className="navbar-item nav-font" href="/profile">Profile</a>
          </li>
        );
      navBarItems.push(
         <li  key={5}>
          <a className="navbar-item nav-font" href="/logout">Log Out</a>
        </li>
      );
  
    } else {
      navBarItems.push(
         <li  key={6}>
          <a className="navbar-item nav-font" href="/signup">Sign Up</a>
        </li>
      );
      navBarItems.push(
         <li  key={7}>
          <a className="navbar-item nav-font" href="/login">Log In</a>
        </li>
      );
    }
  
    return (
      <>
        <nav bg="dark">
           <ul>{navBarItems}</ul>
          
        </nav>
      </>
    );
  }
  
  export default NavBar;
  