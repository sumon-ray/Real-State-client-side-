import { Navigate } from 'react-router-dom'
// import LoadingSpinner from '../components/Shared/LoadingSpinner'

import PropTypes from 'prop-types'
import useRole from '../hook/useRole'
const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <p>loading...</p>
  if (role === 'admin') return children
  return <Navigate to='/dashboard' />
}

export default AdminRoute

AdminRoute.propTypes = {
  children: PropTypes.element,
}