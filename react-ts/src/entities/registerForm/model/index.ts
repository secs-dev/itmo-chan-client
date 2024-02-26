import {UserRegister} from "@/shared/api";
import {registerFx} from "@/features/auth";
import {MessageInstance} from "antd/es/message/interface";
import { redirect } from 'atomic-router';
import {routes} from "@/shared/routing";
import { createEvent } from 'effector';
interface RegisterProps {
    userRegister: UserRegister,
    messageApi: MessageInstance,
}
const key = 'register';
export const register = ({userRegister, messageApi}: RegisterProps) => {
    const goToHome = createEvent();
    messageApi.open({
        key,
        type: 'loading',
        content: "loading...",
    })
    redirect({clock: goToHome, route: routes.home})
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    registerFx(userRegister).then(_ => {
        messageApi.open({
            key,
            type: 'success',
            content: "Успешно",
            duration: 2,
        });
        goToHome()
    }).catch(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (_) => {
            messageApi.open({
                key,
                type: 'error',
                content: "Неудачная попытка регистрации",
                duration: 3,
            });

        }
    )
}

interface ValidatePasswordProps {
    password: string,
    repeatedPassword: string,
    messageApi: MessageInstance,
}

export const validatePassword = ({password, repeatedPassword, messageApi}: ValidatePasswordProps): boolean => {
    if (password === repeatedPassword) {
        return password === repeatedPassword
    } else {
        messageApi.open({
            key,
            type: 'error',
            content: "Пароли не совпадают",
            duration: 3,
        });
        return false;
    }
}
