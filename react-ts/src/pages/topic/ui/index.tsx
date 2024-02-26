import {TopicThreads} from "@/wigets/thread-list/ui/ui.tsx";
import Header from "@/wigets/header";
import {Content} from "antd/es/layout/layout";
import {Layout} from "antd";
import "./index.css";

export const Topic = (topicId: number) => () => {
    return (
        <Layout className="page-layout">
            <Header/>
            <Content className="page-content">
                <TopicThreads topicId={topicId}/>
            </Content>
        </Layout>
    )
};