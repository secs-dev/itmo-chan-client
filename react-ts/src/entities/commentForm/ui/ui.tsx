import {Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import {IFormData} from "../model";
import {useEffect} from "react";
import {addComment} from "@/entities/commentForm/api";
import {throwErrorFx} from "@/shared/error";

interface CommentFormProps {
    replyCommentId: number | null,
    threadId: number | null,
    submitComment: boolean,
    setSubmitComment: any,
    onClose: any,
}

export const CommentForm = ({replyCommentId, threadId, submitComment, setSubmitComment, onClose}: CommentFormProps) => {
    const [form] = Form.useForm<IFormData>();
    useEffect( () => {
        if (!threadId) {
            throwErrorFx({code: null, message: "Вы не правы"});
            return;
        }
        if (submitComment) {
            addComment(form.getFieldsValue(), threadId, replyCommentId, onClose)
            setSubmitComment(false)
        }
    }, [submitComment])
    return (
        <Form form={form} layout="vertical" autoComplete="off" requiredMark={'optional'}>
            <Form.Item name="title" label="Заголовок">
                <Input />
            </Form.Item>
            <Form.Item name="content" required label="Текст комментария">
                <TextArea rows={7} />
            </Form.Item>
        </Form>

    )
}