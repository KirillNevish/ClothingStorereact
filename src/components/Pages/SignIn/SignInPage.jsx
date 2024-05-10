
import React, { useState } from 'react';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function checkPassword(value) {
    let testPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,20}$/;
    return testPass.test(value);
  }

  function checkEmail(value) {
    let testEmail = /^[a-z0-9._-]+@[a-z]{2,5}\.[a-z]{2,3}$/i;
    return testEmail.test(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!checkEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!checkPassword(password)) {
      setErrorMessage('Password must be 8-20 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
      return;
    }

    const ThisAcc = { email, password }; 
    localStorage.setItem('ThisAcc', JSON.stringify(ThisAcc)); 


    const date = new Date();
    date.setDate(date.getDate() + 30);
    const expires = date.toUTCString();
    const cookieValue = `AccsuccefullyLogined=${encodeURIComponent(email)}; expires=${expires}; Secure; SameSite=None`;
    document.cookie = cookieValue;


    window.location.href = '/';


    setEmail('');
    setPassword('');
    setErrorMessage('');
  }

  return (
    <div className="modal modal-sheet position-static d-block bg-body-white p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Login or Sign in for free</h1>
          </div>
          <div className="modal-body p-5 pt-0">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
              <button className="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">Sign in/Login</button>
              <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
