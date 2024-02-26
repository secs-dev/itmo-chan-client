import { Layout } from "antd";
import "./index.css";
import {TopicList} from "@/wigets/topic-list";
import {Content} from "antd/es/layout/layout";
import Header from "@/wigets/header";

export const Home = () => {
  return (
      <Layout className="page-layout">
        <Header/>
        <Content className="page-content">
          <TopicList/>
        </Content>
      </Layout>
)
};