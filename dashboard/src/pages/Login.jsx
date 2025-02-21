import React from 'react'
import './Login.css'

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
              <button className='btn btn-primary custom-button p-2'>Submit</button>
            </div>
          </form>
        </div>
        <div className="login-image">
          <img src="https://ecme-react.themenate.net/img/others/auth-side-bg.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login