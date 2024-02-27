import {Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import {IFormData} from "../model";
import {useEffect} from "react";
import {throwErrorFx} from "@/shared/error";
import {addThread} from "../api";

interface ThreadFormProps {
    topicId: number | null,
    submitThread: boolean,
    setSubmitThread: any,
    onClose: any,
}

export const ThreadForm = ({topicId, submitThread, setSubmitThread, onClose}: ThreadFormProps) => {
    const [form] = Form.useForm<IFormData>();
    useEffect( () => {
        if (!topicId) {
            throwErrorFx({code: null, message: "Вы не правы"});
            return;
        }
        if (submitThread) {
            addThread(form.getFieldsValue(), topicId, onClose)
            setSubmitThread(false)
        }
    }, [submitThread])
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