import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...props }) => {
  const token = localStorage.getItem('token')

  if (token) {
    return <Route component={Component} {...props} />
  }
  return <Redirect to="/signin" />
}

export default PrivateRoute
