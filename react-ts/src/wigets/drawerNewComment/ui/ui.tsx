import {Button, Drawer, message, Space} from 'antd';
import {CommentForm} from "@/entities/commentForm";
import {useState} from "react";
import {$isAuthenticated} from "@/features/auth";

interface DrawerNewCommentProps {
    open: boolean,
    onClose: any,
    replyCommentId: number | null,
    threadId: number | null,
}

export const DrawerNewComment = ({open, onClose, replyCommentId, threadId}: DrawerNewCommentProps) => {
    const [submitComment, setSubmitComment] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const onSubmitComment = () => {
        if ($isAuthenticated.getState())
            setSubmitComment(true)
        else {
            messageApi.error("Вы не авторизированны", 3)
        }
    }
    return (
        <>
            {contextHolder}
            <Drawer
                title={`Reply to №${replyCommentId ? replyCommentId : ""}`}
                width={720}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Отмена</Button>
                        <Button onClick={onSubmitComment} type="primary">Отправить</Button>
                    </Space>
                }
            >
              <CommentForm
                  replyCommentId={replyCommentId}
                  threadId={threadId}
                  submitComment={submitComment}
                  setSubmitComment={setSubmitComment}
                  onClose={onClose}
              />
            </Drawer>
        </>
    );
};
