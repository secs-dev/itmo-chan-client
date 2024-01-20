import { Button, Image, Layout, Menu, MenuProps, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

type MyLayoutProps = {
  items: MenuItem[];
  defaultSelectedKeys: string[];
};

export const MyLayout = ({ items, defaultSelectedKeys }: MyLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#eee" }}
      >
        <div className="demo-logo-vertical" />
        <Image src="https://my.itmo.ru/img/logo.svg" preview={false} />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
          items={items}
          onClick={({key}) => console.log(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#eee" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#eee",
            borderRadius: "#ddd",
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
