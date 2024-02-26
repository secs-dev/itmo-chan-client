import {Button, Input, message} from "antd";
import {ReactNode, useState} from "react";
import "./index.css"
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {register, validatePassword} from "../model";

interface RegisterFormProps {
    changeFormButton: ReactNode,
}
export const RegisterForm = ({changeFormButton}: RegisterFormProps) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatedPassword, setRepeatedPassword] = useState("")
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <div className="register-form">
            {contextHolder}
            <h4>Регистрация</h4>
            <Input  placeholder="Логин" onChange={(e) => setUsername(e.currentTarget.value)}/>
            <Input.Password
                placeholder="Пароль"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <Input.Password
                placeholder="Повторите пароль"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={(e) => setRepeatedPassword(e.currentTarget.value)}
            />
            <Button onClick={()=> validatePassword({password, repeatedPassword, messageApi}) ?
                register({userRegister: {username, password}, messageApi: messageApi})
            : {} }>Зарегистрироваться</Button>
            {changeFormButton}
        </div>
    )
}