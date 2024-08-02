import { Navigate } from 'react-router-dom';
import { useAuthRoute } from 'hook/useAuthRoute';

const RestrictedRoute = ({
  component: Component,
  redirectTo = '/goit-react-hw-08-phonebook',
}) => {
  const { isLoggedIn } = useAuthRoute();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
