import axios from 'axios';

//No auth
const BACKEND_URL = "http://localhost:8080"
export async function fetchTopics() {
    try {
        const response = await axios.get(BACKEND_URL + "/api/topic");
        return response.data;
    } catch (error) {
        console.error('Error fetching topics:', error);
        throw error;
    }
}

export async function fetchTopic(topicId) {
    try {
        const response = await axios.get(BACKEND_URL + "/api/topic/" + topicId);
        return response.data;
    } catch (error) {
        console.error('Error fetching topic:', error);
        throw error;
    }
}

export async function fetchComment(commentId) {
    try {
        const response = await axios.get(BACKEND_URL + "/api/comment/" + commentId);
        return response.data;
    } catch (error) {
        console.error('Error fetching comment:', error);
        throw error;
    }
}

export async function fetchThreadComments(threadId) {
    try {
        const response = await axios.get(BACKEND_URL + "/api/thread/" + threadId + "/comments");
        return response.data;
    } catch (error) {
        console.error('Error fetching thread`s comments:', error);
        throw error;
    }
}