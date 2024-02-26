import {useState} from "react";
import {LoginForm} from "@/entities/loginForm";
import {RegisterForm} from "@/entities/registerForm";
import {Button} from "antd";
import "./index.css";

export const AuthForm = () => {
    const [isThereAccount, changeForm] = useState(true);
    const changeFormButton = (
        <Button type="link" onClick={() => changeForm(!isThereAccount)}>
        {isThereAccount ? "Нет аккаунта?" : "Уже есть аккаунт?"}
        </Button>
    )
    return (
        <div className="auth-form">
            {isThereAccount ? <LoginForm changeFormButton={changeFormButton} /> : <RegisterForm changeFormButton={changeFormButton}/> }
        </div>
        )
}