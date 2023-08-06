import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Create Account</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div>
        <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Remember me</label>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <b>
        <p className="forgot-password text-center">
          Already have an account? <a href="/sign-in">Login</a>
        </p>
        </b>
      </form>
    )
  }
}
