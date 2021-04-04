import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Errors from '../Errors'

import { register, videErrors } from '../../JS/actions/user'

// import "./SignUp.css";

const SignUp = ({ history }) => {
  const [user, setuser] = useState({})
  const errors = useSelector((state) => state.userReducer.errors)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    return () => {
      dispatch(videErrors())
    }
  }, [])
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>{' '}
          <input
            type="text"
            class="form-control"
            id="name"
            onChange={handleChange}
            placeholder="Enter a valid Name"
          />{' '}
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>{' '}
          <input
            type="text"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            placeholder="Enter a valid email address"
          />{' '}
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => dispatch(register(user, history))}
        >
          SignUp
        </button>{' '}
      </form>
      <div className="row mb-4 px-3">
        {' '}
        <small className="font-weight-bold">
          have already an account?{' '}
          <Link to="/signin">
            <a className="text-danger ">SignIn</a>
          </Link>
        </small>
      </div>
      <div className="row mb-4 px-3">
        <div className="facebook text-center mr-3">
          <i class="fab fa-facebook-f"></i>
        </div>
        <div className="twitter text-center mr-3">
          <i class="fab fa-twitter"></i>
        </div>
        <div className="linkedin text-center mr-3">
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}

export default SignUp
