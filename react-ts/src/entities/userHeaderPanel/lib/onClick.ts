import {MenuProps} from "antd";
import {logoutFx} from "@/features/auth";

export const onClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
        case 'exit': {
            logoutFx();
            break;
        }
        case "login": {
            break;
        }
        default: {
            break;
        }
    }
};