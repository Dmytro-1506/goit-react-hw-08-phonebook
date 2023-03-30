import { useSelector } from 'react-redux';
import {
    selectUser,
    selectIsLoggedIn,
    selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
    // console.log(isLoggedIn);
    // console.log(isRefreshing);
    // console.log(user);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};