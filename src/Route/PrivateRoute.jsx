import PropTypes from 'prop-types'

import { Navigate, useLocation } from 'react-router-dom'
// import LoadingSpinner from '../components/Shared/LoadingSpinner'
import { useContext } from 'react'
import { AuthContext } from '../component/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext)
  const location = useLocation()

  if (loader) return <p>loading...</p>
  if (user) return children
  return <Navigate to='/login' state={location.pathname} replace='true' />
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
}

export default PrivateRoute