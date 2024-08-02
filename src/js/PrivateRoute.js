import { Navigate } from 'react-router-dom';
import { useAuthRoute } from 'hook/useAuthRoute';

const PrivateRoute = ({
  component: Component,
  redirectTo = '/goit-react-hw-08-phonebook',
}) => {
  const { isLoggedIn, isChecking } = useAuthRoute();
  const shouldRedirect = !isLoggedIn && !isChecking;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
