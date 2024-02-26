import axios from "axios";
import {TopicThreadEntity} from "@/shared/api";
import {ThreadCommentsEntity} from "@/shared/api/interfaces.ts";

const BACKEND_URL = "http://localhost:8080"

export async function fetchTopic(topicId: number) {
    try {
        const response = await axios.get<TopicThreadEntity>(BACKEND_URL + "/api/topic/" + topicId);
        return response.data;
    } catch (error) {
        console.error('Error fetching topic:', error);
        throw error;
    }
}

export async function fetchThreadComments(threadId: number) {
    try {
        const response = await axios.get<ThreadCommentsEntity>(BACKEND_URL + "/api/thread/" + threadId + "/comments");
        return response.data;
    } catch (error) {
        console.error('Error fetching thread comments:', error);
        throw error;
    }
}
