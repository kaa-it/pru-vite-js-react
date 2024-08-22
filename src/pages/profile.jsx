import {useNavigate} from "react-router-dom";
import {logout} from "../services/auth/actions.js";
import {useDispatch} from "react-redux";

export const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClick = () => {
        navigate("/");
    };

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <div className="page">
            <h1 className="title">Личный кабинет</h1>
            <button className="button" onClick={onClick}>
                На главную
            </button>
            <button className="button" onClick={onLogout}>
                Выход
            </button>
        </div>
    );
}