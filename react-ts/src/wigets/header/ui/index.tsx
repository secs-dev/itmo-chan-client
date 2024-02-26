import {Image} from "antd";
import {Header} from "antd/es/layout/layout";
import "./index.css"
import {Link} from "atomic-router-react";
import {UserHeaderPanel} from "@/entities/userHeaderPanel";

export const MyHeader = () => {
    return (
        <Header className="header">
            <Link to={"https://my.itmo.ru"}>
                <Image src="https://my.itmo.ru/img/logo.svg" preview={false} />
            </Link>
            <Link to={"/"}>
                <h1>ITMO chan</h1>
            </Link>
            <div className="header-user-panel">
                <UserHeaderPanel/>
            </div>
        </Header>
    )
}