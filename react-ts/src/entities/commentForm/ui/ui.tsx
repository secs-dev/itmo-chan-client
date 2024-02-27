import {Form, Input, Upload, UploadFile, UploadProps} from "antd";
import TextArea from "antd/es/input/TextArea";
import {IFormData} from "../model";
import {useEffect, useState} from "react";
import {addComment} from "@/entities/commentForm/api";
import {throwErrorFx} from "@/shared/error";
import {InboxOutlined} from "@ant-design/icons";

interface CommentFormProps {
    replyCommentId: number | null,
    threadId: number | null,
    submitComment: boolean,
    setSubmitComment: any,
    onClose: any,
}

const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export const CommentForm = ({replyCommentId, threadId, submitComment, setSubmitComment, onClose}: CommentFormProps) => {
    const [form] = Form.useForm<IFormData>();
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const props: UploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);

            return false;
        },
        fileList,
    };

    useEffect( () => {
        if (!threadId) {
            throwErrorFx({code: null, message: "Вы не правы"});
            return;
        }
        if (submitComment) {
            addComment(form.getFieldsValue(), threadId, replyCommentId, fileList, onClose)
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
            <Form.Item label="Загрузка изображений и видео">
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>
        </Form>

    )
}