import {UserAuth} from "@/shared/api";
import {loginFx} from "@/features/auth";
import {MessageInstance} from "antd/es/message/interface";
import { redirect } from 'atomic-router';
import {routes} from "@/shared/routing";
import { createEvent } from 'effector';
interface LoginProps {
    userAuth: UserAuth,
    messageApi: MessageInstance,
}
export const login = ({userAuth, messageApi}: LoginProps) => {
    const key = 'loginKey';
    const goToHome = createEvent();
    messageApi.open({
        key,
        type: 'loading',
        content: "loading...",
    })
    redirect({clock: goToHome, route: routes.home})
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginFx(userAuth).then(_ => {
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
                content: "Неудачная попытка входа",
                duration: 3,
            });

        }
    )
}