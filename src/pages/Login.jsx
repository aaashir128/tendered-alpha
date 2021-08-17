import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../config/firebase";
import { useStateValue } from "../config/StateProvider";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [{user}, dispatch] = useStateValue()
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
    
    auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result.user.email)
      alert(result.user.email, " Congragulations, you have successfully signed In")
      history.push('/')

    }).catch((error) => {
      console.log(error)
      alert(error.message)
    })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result.user.email)
      alert(result.user.email, " Congragulations, your account has been successfully created")
    }).catch((error) => {
      console.log(error)
      alert(error.message)
    })
  }

  return (
    <div className="login">
      <div className="login__left">
        <img
          className="login__image"
          src="https://tenderd-ui.storage.googleapis.com/assets/asset-signup-1.png"
          alt=""
        />
      </div>

      <div className="login__right">
        <div className="login__rightTop">
          <div className="rightTopLeft">
            <Link to="/">
              <img
                className="loginLogo"
                src="https://tenderd-ui.storage.googleapis.com/assets/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="rightTopRight">
          <Link to="/">
            <button className="homeButton">Home</button>
            </Link>

          </div>
        </div>

        <div className="login__center">
          <h3>login to Tendered</h3>
          <form>
            <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Pasword" onChange={e => setPassword(e.target.value)}/>
            <button type='submit' onClick={handleLogin}>Login Now</button>
          </form>

          <div className="signUp">
            <p>Don't have an account yet? </p>
            <button className="signUpButton" onClick={handleSignUp}>Sign Up Now</button>
          </div>

          <div className="forgotPassword">
            <p>Forgot Password? </p>
            <button className="forgotButton">Reset Here</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
