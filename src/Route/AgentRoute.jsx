import { Navigate } from 'react-router-dom'

// import useRole from '../hooks/useRole'
import PropTypes from 'prop-types'
import useRole from '../hook/useRole'

const AgentRoute = ({ children }) => {
    const [role, isLoading] = useRole()

    if (isLoading) return <p>loading...</p>
    if (role === 'agent') return children
    return <Navigate to='/dashboard' />
  }
  
  export default AgentRoute
  
  AgentRoute.propTypes = {
    children: PropTypes.element,
  }