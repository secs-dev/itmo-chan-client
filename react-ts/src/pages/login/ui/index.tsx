import { Layout } from "antd";
import "./index.css";
import {AuthForm} from "@/wigets/authForm"
import {Content} from "antd/es/layout/layout";
import Header from "@/wigets/header";

export const Auth = () => {
  return (
      <Layout className="page-layout">
          <Header/>
          <Content className="page-auth-widget">
              <AuthForm/>
          </Content>
      </Layout>
)
};