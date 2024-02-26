import {IFormData} from "../model";
import axios, {AxiosError} from "axios";
import {CommentDTOEntity} from "@/shared/api";
import {$authStore} from "@/features/auth";
import {throwErrorFx} from "@/shared/error";
import {ErrorBackend} from "@/shared/api/interfaces.ts";

const BACKEND_URL = "http://localhost:8080"

export async function addComment(formData: IFormData, threadId: number, replyCommentId: number | null, onClose: any) {
    const data= new FormData()
    const comment: CommentDTOEntity = {threadId: threadId, title: formData.title ? formData.title : null, content: formData.content}
    data.append('comment', new Blob([JSON.stringify(comment)], {type: "application/json"}))
    data.append('repliedTo', new Blob([JSON.stringify(replyCommentId ? [replyCommentId] : null)], {type : 'application/json'}))
    const config= {
        "headers": {
             "content-type": 'multipart/form-data;',
            "Authorization" : `Bearer ${$authStore.getState().token}`
        }
    }
    await axios.post(`${BACKEND_URL}/api/comment`, data, config).then((_: any) => {
        onClose()
        //TODO updateCommentList()
    }).catch((err: AxiosError) => {
        const errData: ErrorBackend = JSON.parse(JSON.stringify(err.response?.data))
        throwErrorFx({code: errData && errData.code ? errData.code : undefined, message: errData && errData.message ? errData.message : err.message})
    })
}