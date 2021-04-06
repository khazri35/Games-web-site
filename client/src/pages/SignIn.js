import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../JS/actions/user'

import { Link } from 'react-router-dom'

const SignIn = ({ history }) => {
  const [user, setuser] = useState({})

  const dispatch = useDispatch()
  const errors = useSelector((state) => state.userReducer.errors)
  console.log(errors)
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }
  // useEffect(() => {
  //   return () => {
  //     dispatch(videErrors())
  //   }
  // }, [])

  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <form>
        <div class="mb-3">
          <label class="form-label">Email address</label>{' '}
          <input
            class="form-control"
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Enter a valid email address"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            class="form-control"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
          />{' '}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => dispatch(signin(user, history))}
        >
          SignIn
        </button>{' '}
      </form>
      <div className="row mb-4 px-3">
        {' '}
        <small className="font-weight-bold">
          Don't have an account?
          <Link to="/signup">
            <a className="text-danger ">SignUP</a>
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

export default SignIn
