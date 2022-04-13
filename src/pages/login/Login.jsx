import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="login__wrapper">
        <h1 className="title">
          {!toggle ? 'Hi, Nice to see you back!' : 'Welcome to our services!'}
        </h1>
        <form className={!toggle ? 'form__container login' : 'display-hide'}>
          <div className="form__item">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username..."
            />
          </div>

          <div className="form__item">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <input type="submit" value="Login" />

          <p className="under__text">
            Need an account?{' '}
            <span onClick={() => setToggle(!toggle)}>Sign up</span>
          </p>
        </form>

        <form className={toggle ? 'form__container signup' : 'display-hide'}>
          <div className="form__item">
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="form__item">
            <label htmlFor="signup__username">username</label>
            <input
              type="text"
              name="signup__username"
              id="signup__username"
              placeholder="username..."
            />
          </div>

          <div className="form__item">
            <label htmlFor="sigunp__password">Password</label>
            <input
              type="password"
              name="signup__password"
              id="signup__password"
            />
          </div>

          <div className="form__item">
            <label htmlFor="signup__repassword">Re-Password</label>
            <input
              type="password"
              name="signup__repassword"
              id="signup__repassword"
            />
          </div>

          <input type="submit" value="Sign Up" />

          <p className="under__text">
            Already have an account?{' '}
            <span onClick={() => setToggle(!toggle)}>Sign in</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
