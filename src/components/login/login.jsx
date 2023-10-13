import React, { useState } from 'react';
import "./login.css";

function LoginForm() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showTeacherCheckbox, setShowTeacherCheckbox] = useState(false);

  const handleSignup = () => {
    if (!isSignup) {
      setShowPhoneNumber(true);
      setShowTeacherCheckbox(true);
    } else {
      // Perform the signup action here, e.g., sending data to the server.
      // You can add your signup logic here.
      // After successful signup, redirect to the profile page.
      window.location.href = '/Home';
    }
    setIsSignup(!isSignup); // Toggle the signup state.
  };

  const handleLogin = () => {
    if (!showPhoneNumber) {
      // Perform the login action here when phone number field is not visible.
      // You can add your login logic here.
      // After successful login, redirect to the home page.
      window.location.href = '/Home';
    }
    setShowPhoneNumber(false);
    setShowTeacherCheckbox(false);
    setIsSignup(false);
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <main className="card p-2 my-5" style={{ width: '25rem' }}>
        <div className="card-body">
          <h1 className="card-title text-center my-4" id="head">
            {isSignup ? 'Sign Up' : 'Welcome back!'}
          </h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                placeholder="name@email.com"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className={`mb-3 ${showPhoneNumber ? '' : 'd-none'}`} id="phNo">
              <label htmlFor="phoneInput" className="form-label">
                Phone number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneInput"
                required
                placeholder="91XXXX8392"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
                placeholder="Enter Your Password"
              />
            </div>
            <div className={`mb-1 form-check ${showTeacherCheckbox ? '' : 'd-none'}`} id="teachCheck">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1" id="teacher">
                Teacher
              </label>
            </div>
            <a href="" id="forget">
              Forget password?
            </a>
            <div className="row py-3">
              <div className="col text-left">
                <button type="button" className="btn btn-primary" id="logIn" onClick={handleLogin}>
                  Login
                </button>
              </div>
              <div className="col text-right">
                <button type="button" className="btn btn-outline-success" id="signUp" onClick={handleSignup}>
                  Sign-up
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default LoginForm;
