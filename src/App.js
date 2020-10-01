import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import Map from './components/Map'
import Navbar from './components/Navbar/Navbar'
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import LogOut from "./components/LogOut/LogOut";
// import ParkShow from "./components/ParkShow/ParkShow"
import ParkList from "./components/ParkList/ParkList"
import './App.css';

require('dotenv').config()

const location = {
  address: '180 Old Bass River Rd, South Dennis, massachusetts.',
  lat: 41.68,
  lng: -70.15,
}
function App(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.token && localStorage.username) {
      setIsLoggedIn(true);
      // decode the token, grab the id out of it:
      // const decodedToken = JSON.parse(atob(localStorage.token.split(".")[1]))
      setState({
        ...state,
        name: localStorage.name,
        email: localStorage.email,
        // id: decodedToken.id,
      })
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setState({
      name: "",
      email: "",
      password: "",

    });
    setIsLoggedIn(false);
    localStorage.clear();
    props.history.push('/');
  };

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };


  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users",
        {
          user: {
            email: state.email,
            password: state.password,
            username: state.username
          }
        });
      console.log(response);
      localStorage.token = response.data.token;
      localStorage.email = state.email;
      // decode the token, grab the id out of it:
      // const decodedToken = JSON.parse(atob(response.data.token.split(".")[1]))
      // setState({ ...state, id: decodedToken.id })
      setState({ ...state })
      setIsLoggedIn(true);
      props.history.push('/parks');

    } catch (err) {
      console.log(err);
      console.log(state)
    }
  };


  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        user: {
          // email: state.email,
          username: state.username,
          password: state.password
        }
      });
      console.log(state)
      localStorage.token = response.data.token;
      // localStorage.email = state.email;
      localStorage.username = state.username;
      localStorage.email = state.email;
      // decode the token, grab the id out of it:
      const decodedToken = JSON.parse(atob(response.data.token.split(".")[1]))
      setIsLoggedIn(true);
      setState({ ...state, id: decodedToken.id })
      // props.history.push('/');
    } catch (error) {
      console.log(error);
      let userChoice;
      userChoice = prompt(`Are you already a member (yes) || (no)?`)
      if (userChoice === 'yes') {
        alert('Did you mistype your email?')
      }
      else if (userChoice === 'no') {
        alert(`Oh... Sign up then!`);
        // props.history.push('/');
      }
    }
  };


  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="body">
        <Switch>
          <Route
            path="/signup"
            render={(props) => {
              return (
                <SignUpForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleSignUp={handleSignUp}
                />
              )
            }}
          />
          <Route
            path="/logout"
            render={(props) => {
              return (
                <LogOut
                  isLoggedIn={isLoggedIn}
                  handleLogOut={handleLogOut}
                />

              );
            }}
          />
          <Route
            path="/parks"
            render={(props) => {
              return (
                <ParkList
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleLogIn={handleLogIn}
                />
              );
            }}
          />
          <Route
            path="/login"
            render={(props) => {
              return (
                <LogInForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleLogIn={handleLogIn}
                />
              );
            }}
          />
          <Route
            path="/"
            render={() => {
              return <Map isLoggedIn={isLoggedIn} />;
            }}
          />

        </Switch>
      </div>
    </div>
  );
}



export default App;
