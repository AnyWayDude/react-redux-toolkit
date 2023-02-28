import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';




const PublicRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector(state => ({
        user: state.auth.user
    }));

    const hasUser = Boolean(user);

    return hasUser
        ? <Navigate to={{ pathname: "/", state: { from: rest.location } }} />
        : <Component {...rest} />;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector(state => ({
        user: state.auth.user
    }));

    const hasUser = Boolean(user);

    return hasUser
        ? <Component {...rest} />
        : <Navigate to={{ pathname: "/sign-in", state: { from: rest.location } }} />;
};


export { PublicRoute, PrivateRoute };