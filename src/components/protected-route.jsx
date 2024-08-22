
import { Navigate, useLocation } from "react-router-dom";
import {getIsAuthChecked, getUser} from "../services/auth/slice.js";
import {useSelector} from "react-redux";

const Protected = ({ onlyUnAuth = false, component}) => {
    const isAuthChecked = useSelector(getIsAuthChecked);
    const user = useSelector(getUser);
    const location = useLocation();

    if (!isAuthChecked) {
        return <p>Загрузка...</p>;
    }

    if (onlyUnAuth && user) {
        const { from } = location.state ?? { from: { pathname: "/ "} };
        return <Navigate to={from} />;
    }

    if (!onlyUnAuth && !user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return component;
}

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({component}) => (
    <Protected onlyUnAuth={true} component={component} />
);