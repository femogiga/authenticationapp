import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ loginData, children }) => {
  if (!loginData) {
    return <Navigate to='/' replace />;
  }
  return children;
};

export default ProtectedRoute;
