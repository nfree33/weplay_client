import React from "react";

function LogInForm(props) {
  return (
    


        <div>
      <h2>Log In to wePlay</h2>
      <div className="container">
        <fieldset>
          <legend>Enter credentials below</legend>
      <form>
 
        <div>
          <label htmlFor="email">Username:</label>
          <input type="text" name="username" onChange={props.handleInput} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={props.handleInput} />
        </div>

        <input value="Submit" type="submit" onClick={props.handleLogIn} />
      </form>
      </fieldset>
    </div>
    </div>
  );
}

export default LogInForm;
