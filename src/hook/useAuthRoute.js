import { useSelector } from 'react-redux';
import {
  selectIsChecking,
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing
} from 'redux/auth/selectors';

export const useAuthRoute = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isChecking = useSelector(selectIsChecking);
  const isRefreshing = useSelector(selectIsRefreshing)
  return {
    user,
    isLoggedIn,
    isChecking,
    isRefreshing
  };
};
