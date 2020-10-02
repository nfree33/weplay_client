import React, { useState, useEffect } from "react";
import axios from 'axios'

function UserProfile(props) {
    const [user, setUser] = useState([])

    useEffect(() => {
        // Need to wrap this in an async function to use await inside:
        async function fetchData() {
            const response = await axios.get("http://localhost:3000/users");
            setUser(response.data);
            console.log("===RESPONSE.DATA===", response.data)
        }
        fetchData();
    }, [!user]);

    console.log("++++++++++USER DATA+++++++++++", user)

    const { username, email } = user
    return (
      <div>
          <h1>User Profile</h1>
          <h1>User: {user.username}</h1>
      </div>
    );
  }
  
  export default UserProfile;
  