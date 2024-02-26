import {Button, Input, message} from "antd";
import "./index.css"
import {ReactNode, useState} from "react";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {login} from "../model";

interface LoginFormProps {
    changeFormButton: ReactNode,
}
export const LoginForm = ({changeFormButton}: LoginFormProps) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
            <div className="login-form">
                <h4>Авторизация</h4>
                <Input  placeholder="Логин" onChange={(e) => setUsername(e.currentTarget.value)}/>
                <Input.Password
                    placeholder="Пароль"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <Button onClick={()=>login({userAuth: {username, password}, messageApi: messageApi})}>Войти</Button>
                {changeFormButton}
            </div>
        </>
    )
}