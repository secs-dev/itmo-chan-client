import {MenuProps} from "antd";
import {Link} from "atomic-router-react";

export const loggedInItems: MenuProps['items'] = [
    {
        key: 'exit',
        danger: true,
        label: "Выйти",
    },
];
export const loggedOutItems: MenuProps['items'] = [
    {
        key: 'login',
        label: <Link to={"/login"}>Войти</Link>,
    },
];
