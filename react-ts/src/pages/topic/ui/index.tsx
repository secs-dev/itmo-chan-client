import {TopicThreads} from "@/wigets/thread-list/ui/ui.tsx";
import Header from "@/wigets/header";
import {Content} from "antd/es/layout/layout";
import {Layout} from "antd";
import "./index.css";
import {DrawerNewComment} from "@/wigets/drawerNewComment";
import {useState} from "react";

export const Topic = (topicId: number) => () => {
    const [open, setOpen] = useState(false);
    const [replyCommentId, setReplyCommentId] = useState<number | null>(null)
    const [threadId, setThreadId] = useState<number | null>(null)

    const openDrawer = (commentId: number, threadId: number) => () => {
        setReplyCommentId(commentId)
        setThreadId(threadId)
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <Layout className="page-layout">
            <Header/>
            <Content className="page-content">
                <TopicThreads topicId={topicId} openDrawer={openDrawer}/>
            </Content>
            <DrawerNewComment open={open} onClose={onClose} replyCommentId={replyCommentId} threadId={threadId}/>
        </Layout>
    )
};