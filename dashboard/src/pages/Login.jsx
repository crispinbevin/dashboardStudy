import React from 'react'
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-section">
      <div className="container login-wrapper">
        <div className="login-form-section">
          <img src="https://ecme-react.themenate.net/img/logo/logo-light-streamline.png" alt="" />
          <div>
            <h3>Welcome back!</h3>
            <h6 style={{fontWeight:'500'}}>Please enter your credentials to sign in</h6>
          </div>
          <form action="">
            <div className="login-field">
              <label htmlFor="email">Email</label>
              <input name='email' type="email" placeholder='Email'/>
            </div>
            <div className="login-field">
              <label htmlFor="pass"> Password</label>
              <input name='pass' type="password" placeholder='Password'/>
            </div>
            <div className='login-buttons'>
              <a href='#'>Forgot password</a>
              <Link to="  "><button className='btn btn-primary custom-button p-2'>Sign In</button></Link>
            </div>
          </form>
          <div className='quick-divider'> <hr /> or continue with <hr /> </div>
          <div className="quick-login">
            <button className='login-social'><FcGoogle style={{fontSize:'2rem'}}/> Google</button>
            <button className='login-social'><FaGithub style={{fontSize:'2rem'}}/> Github</button>
          </div>
          <div className="reg-link">Don't have an account yet? <a href="#">Sign Up</a></div>
        </div>
      </div>
        <div className="login-image">
          <img src="https://ecme-react.themenate.net/img/others/auth-side-bg.png" alt="" />
        </div>
    </div>
  )
}

export default Login