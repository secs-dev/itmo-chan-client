import {IFormData} from "../model";
import axios, {AxiosError} from "axios";
import {CommentDTOEntity} from "@/shared/api";
import {$authStore} from "@/features/auth";
import {throwErrorFx} from "@/shared/error";
import {ErrorBackend, ThreadDTOEntity} from "@/shared/api/interfaces.ts";
import {GetProp, UploadFile, UploadProps} from "antd";

const BACKEND_URL = "http://localhost:8080"
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export async function addThread(formData: IFormData, topicId: number, fileList: UploadFile[], onClose: any) {
    const data= new FormData()
    const comment: CommentDTOEntity = {threadId: -1, title: formData.title ? formData.title : null, content: formData.content}
    const thread: ThreadDTOEntity = {topicId: topicId}
    data.append('comment', new Blob([JSON.stringify(comment)], {type: "application/json"}))
    data.append('thread', new Blob([JSON.stringify(thread)], {type : 'application/json'}))
    fileList.forEach((file) => {
        data.append('files', file as FileType);
    });
    const config= {
        "headers": {
             "content-type": 'multipart/form-data;',
            "Authorization" : `Bearer ${$authStore.getState().token}`
        }
    }
    await axios.post(`${BACKEND_URL}/api/thread`, data, config).then((_: any) => {
        onClose()
        //TODO updateCommentList()
    }).catch((err: AxiosError) => {
        const errData: ErrorBackend = JSON.parse(JSON.stringify(err.response?.data))
        throwErrorFx({code: errData && errData.code ? errData.code : undefined, message: errData && errData.message ? errData.message : err.message})
    })
}