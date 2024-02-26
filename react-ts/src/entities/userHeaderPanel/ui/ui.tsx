import {$authStore, $isAuthenticated} from "@/features/auth";
import {useUnit} from "effector-react"
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import "./ui.css"
import {Dropdown, Space} from "antd";
import {onClick, loggedOutItems, loggedInItems} from "../lib"
export const UserHeaderPanel = () => {
    const isAuth = useUnit($isAuthenticated);
    const username = useUnit($authStore.map(state => state.username))
    return (
        <div className="user-header-panel">
            <Dropdown
                className="user-header-panel-dropdown"
                menu={ isAuth ? {items: loggedInItems, onClick: onClick} : {items: loggedOutItems, onClick: onClick}}
                trigger={['click']}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <UserOutlined className="user-header-panel-icon" />
                        { ( isAuth ?
                                <div className="user-logged-in">
                                    Привет, {username}!
                                </div>
                                :
                                <div className="user-logged-out">
                                    Здравствуй, гость!
                                </div>
                        )}
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
        )
}