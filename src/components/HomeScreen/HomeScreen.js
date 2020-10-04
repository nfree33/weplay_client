import React from "react";

function HomeScreen(props) {
  return (
    <div className="welcome-body">
        <h1 className="sport-font">Welcome to wePlay!</h1>
        <div className="welcome-message"><p>Have you ever wanted to play a team sport, but realized you have no friends?</p>
        <p>We thought so!</p>
        <p>No longer do you have to hit the tennis ball against your own garage</p>
        <p>No longer do you have to play soccer with your dog</p>
        <p>No longer do you have to chase the basketball down your driveway, into the street, and halfway across town</p>
        <a href="/parks">Check out our locations</a>
        </div>
    </div>
  );
}

export default HomeScreen;
