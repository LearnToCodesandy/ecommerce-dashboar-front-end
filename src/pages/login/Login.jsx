import React from 'react';
import './login.css';

const Login = () => {
  return (
    <>
      <div className="login__wrapper">
        <form className="form__container login">
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
        </form>

        <form className="form__container signup">
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
        </form>
      </div>
    </>
  );
};

export default Login;
