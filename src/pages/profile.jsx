import {useNavigate} from "react-router-dom";

export const Profile = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/");
    };

    const onLogout = () => {

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