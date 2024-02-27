import {Form, Input, Upload, UploadFile, UploadProps} from "antd";
import TextArea from "antd/es/input/TextArea";
import {IFormData} from "../model";
import {useEffect, useState} from "react";
import {throwErrorFx} from "@/shared/error";
import {addThread} from "../api";
import {InboxOutlined} from "@ant-design/icons";

interface ThreadFormProps {
    topicId: number | null,
    submitThread: boolean,
    setSubmitThread: any,
    onClose: any,
}
const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export const ThreadForm = ({topicId, submitThread, setSubmitThread, onClose}: ThreadFormProps) => {
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
        if (!topicId) {
            throwErrorFx({code: null, message: "Вы не правы"});
            return;
        }
        if (submitThread) {
            addThread(form.getFieldsValue(), topicId, fileList, onClose)
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